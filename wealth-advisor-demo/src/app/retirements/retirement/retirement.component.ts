import { Component, OnInit, OnDestroy } from '@angular/core';
import { RetirementService } from '../shared/retirement.service';

import { tap } from 'rxjs/operators'
import { Subscription } from 'rxjs';
import { Retirement, Cashflow } from '../shared/retirement.model';
import { InvestmentService } from 'src/app/investments/shared/investment.service';

@Component({
  selector: 'app-retirement',
  templateUrl: './retirement.component.html',
  styleUrls: ['./retirement.component.scss']
})
export class RetirementComponent implements OnDestroy {

  retirement: Retirement;
  cashflows: Cashflow[];

  totalSaving: number;
  totalExpense: number;
  totalAddSaving: number;

  savingChartData: any = { saving: 50, expense: 60 };
  cashflowChartData: any = { age: [], incomes: [], saving: [] };
  investPortionChartData: any;
  investReturnHistoryChartData: any;

  subscription: Subscription;

  private schemes: any;

  constructor(
    private retirementService: RetirementService,
    private investmentService: InvestmentService
  ) {
    let retirementId: string = 'model1';
    this.retirementService.getRetirement(retirementId).pipe(
      tap(res => {
        console.log('found!');
      })
    ).subscribe(
      retirement => {
        this.retirement = retirement;
        this.cashflows = retirement.cashflows;
        this.intiSavingChartData();
        this.initCashflowChartData();
        this.initInvestPortionChartData();
        //this.initInvestReturnHistoryChartData();
      }
    );

    this.subscription = this.retirementService.changeRetirement().subscribe(res => {
      console.log('retirement change!');
      console.log(res);
      this.retirementService.getRetirement(res.id).subscribe(retirement => {
        this.retirement = retirement;
        this.cashflows = retirement.cashflows;
        this.intiSavingChartData();
        this.initCashflowChartData();
        this.initInvestPortionChartData();
        //this.initInvestReturnHistoryChartData();
      });
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private intiSavingChartData() {
    if (this.retirement.cashflows) {
      let retireCashflow = this.cashflows.filter((cashflow: Cashflow) => {
        return cashflow.age == (+this.retirement.retire + 1) && cashflow.month == 1;
      })[0];
      let lastCashflow = this.cashflows[this.cashflows.length - 1];

      this.totalSaving = retireCashflow.accuSaving;
      this.totalExpense = lastCashflow.accuExpense;
      this.totalAddSaving = this.totalExpense - this.totalSaving;
      if (this.totalAddSaving < 0) {
        this.totalAddSaving = 0;
      }
      this.savingChartData = { saving: this.totalSaving, expense: this.totalExpense };
    } else {
      this.savingChartData = null;
    }
  }

  private initCashflowChartData() {
    let cashflows = this.retirement.cashflows.filter((cashflow: Cashflow) => {
      return cashflow.month === 12;
    });

    let ages = cashflows.map((cashflow: Cashflow) => {
      return cashflow.age;
    });
    let incomes = cashflows.map((cashflow: Cashflow) => {
      return cashflow.income;
    });
    let savings = cashflows.map((cashflow: Cashflow) => {
      return cashflow.accuSaving;
    });
    this.cashflowChartData = { ages: ages, incomes: incomes, savings: savings };
  }

  private initInvestPortionChartData() {
    this.investmentService.getOptionByReturnRate(this.retirement.beforeDiscountRate).subscribe(schemes => {
      console.log(schemes);
      this.schemes = schemes;
      let labels = schemes.map(row => row.type);
      let invests = schemes.map(row => row.invest);
      this.investPortionChartData = { labels: labels, invests: invests };
      if(this.schemes) {
        this.initInvestReturnHistoryChartData();
      }
    });
  }

  private initInvestReturnHistoryChartData() {
    let schemes = this.schemes;
    this.investmentService.getAverageReturnByScheme(schemes).subscribe(data => {
      console.log(data);
      let labels = data.map(row => row.year);
      let returns = data.map(row => row.ar);
      this.investReturnHistoryChartData = { labels: labels, returns: returns };
    });
  }

}
