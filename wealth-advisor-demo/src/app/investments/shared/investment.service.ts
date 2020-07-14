import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Alternative } from './investment.model';

import { of, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(
    private http: HttpClient
  ) { }

  getOptionByReturnRate(rate: number): Observable<any> {
    return this.http.get("./assets/data/options.json").pipe(
      map((res:any) => res.options),
      map((schemes:any[]) => {
        return schemes.filter(scheme => scheme.er == rate);
      })
    );
  }

  // getOptionByReturnRate(rate: number): Observable<any> {
  //   return this.http.get("./assets/data/options.json").pipe(
  //     map(data => {
  //       let options = data['options'];
  //       return options.map((option: Array<any>) => {
  //         let returnRate = option[0];
  //         option.shift();
  //         return { labels: data['labels'], returnRate: returnRate, invests: option };
  //       })
  //     }),
  //     map(data => {
  //       return data.filter(element => element.returnRate >= rate);
  //     }),
  //     map(data => data[0])
  //   );
  // }

  // getAverageReturnByRate(rate: number): Observable<any> {
  //   return this.http.get("./assets/data/returns.json").pipe(
  //     map(data => {
  //       let histories = data['histories'];
  //       return histories.map((history: Array<any>) => {
  //         let returnRate = history[0];
  //         history.shift();
  //         return { labels: data['labels'], returnRate: returnRate, returns: history };
  //       })
  //     }),
  //     map(data => {
  //       return data.filter(element => element.returnRate >= rate);
  //     }),
  //     map(data => data[0])
  //   );
  // }

  getAverageReturnByScheme(schemes: any[]): Observable<any> {
    let allReturns$ = this.getAllReturns();
    let returns$ = allReturns$.pipe(
      map(returns => {
        return this.calcAverageReturn(schemes,returns);
      })
    )
    return returns$;
  }

  private calcAverageReturn(schemes: any[], returns: any): any[] {
    let period = returns.period;
    let data = returns.data;
    let results: any[] = [];
    for (let year = period.start; year <= period.end; year++) {
      let yearReturns = this.calcAverageByYear(schemes, data, year);
      let sum = yearReturns.reduce((sum, current) => sum + current.average, 0);
        results.push({ year: year, ar: sum.toFixed(3) });
    }
    return results;
  }

  private calcAverageByYear(schemes: any[], data: any[], year: number): any[] {

    let yearReturns = data.filter(row => row.year === year)
      .map(row => {
        let matchedScheme = schemes.find(scheme => scheme.type == row.type);
        if (matchedScheme) {
          row['invest'] = matchedScheme.invest;
          row['average'] = row.ar * matchedScheme.invest / 100;
          return row;
        }
        return null;
      })
      .filter(row => row != null);
    
    return yearReturns;
  }

  private getAllReturns(): Observable<any> {
    return this.http.get("./assets/data/returns.json");
  }


}
