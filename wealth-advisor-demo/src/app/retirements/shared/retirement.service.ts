import { Injectable } from '@angular/core';
import { Observable, of, from, Subject } from 'rxjs';
import { Retirement, Cashflow } from './retirement.model';

import PouchDB from 'pouchdb-browser';
import PouchdbFind from 'pouchdb-find';
import { Agent } from 'http';
import { map } from 'rxjs/operators';

declare function emit(val: any);
declare function emit(key: any, val: any);

@Injectable({
  providedIn: 'root'
})
export class RetirementService {

  private changeRetirementSubject = new Subject<any>();
  private db: any;

  constructor() {
    PouchDB.plugin(PouchdbFind);
    this.db = new PouchDB('retirements', { auto_compaction: true });
    this.db.info().then(info => {
      console.log(info);
    });
  }

  addRetirement(retirement: Retirement): Observable<any> {
    retirement._id = 'model1';
    let add$ = this.db.put(retirement).then(res => {
      console.log('Successfully add retirement');
      this.changeRetirementSubject.next(res);
    });
    return from<any>(add$);
  }

  updateRetirement(retirement: Retirement): Observable<Retirement> {

    this.db.get(retirement._id).then((doc) => {
      retirement._rev = doc._rev;
      retirement.cashflows = this.calcCashflows(retirement);
      return this.db.put(retirement);
    }).then(response => {
      // handle response
      console.log('Successfully add retirement');
      this.changeRetirementSubject.next(response);
      //this.addCashflowsByRetirement(retirement);

    }).catch(function (err) {
      console.log(err);
    });

    return of(null);
  }

  getRetirement(id: string): Observable<any> {
    const retirement$ = this.db.get(id);
    return from<any>(retirement$);
  }

  changeRetirement(): Observable<any> {
    return this.changeRetirementSubject.asObservable();
  }

  private compareFn = (a, b) => {
    if (a.seq < b.seq)
      return -1;
    if (a.seq > b.seq)
      return 1;
    return 0;
  };

  private range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

  private calcCashflows(retirement: Retirement): Cashflow[] {
    let cashflows: Cashflow[] = new Array();
    let nextAge = +retirement.age + +1;
    let ages = this.range(nextAge, retirement.lifespan, 1);
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    let cashflow = new Cashflow();
    cashflow.type = 'cashflow:' + retirement._id;
    cashflow.seq = 0;
    cashflow.age = +retirement.age;
    cashflow.month = 12;
    cashflow.saving = retirement.currentSaving;
    cashflow.accuSaving = retirement.currentSaving;
    cashflows.push(cashflow);

    let index = 1;
    let accuSaving = cashflow.accuSaving;
    let accuExpense = 0;
    for (let age of ages) {
      for (let month of months) {
        let cashflow = new Cashflow();
        cashflow.type = 'cashflow:' + retirement._id;
        cashflow.seq = index;
        cashflow.age = age;
        cashflow.month = month;
        cashflow.saving = this.getSaving(age, month, retirement);
        cashflow.income = this.getIncome(age, month, cashflows[index-1], retirement);
        cashflow.expense = this.getExpense(age, retirement);
        cashflow.returnRate = this.getReturnRate(age, retirement);
        cashflow.accuSaving = this.getAccuSaving(accuSaving,cashflow);
        cashflow.accuExpense = +accuExpense + +cashflow.expense;
        cashflows.push(cashflow);

        accuSaving = cashflow.accuSaving;
        accuExpense = cashflow.accuExpense;
        index = index + 1;
      }
    }
    return cashflows;
  }

  private getReturnRate(age: number, retirement: Retirement) {
    if (age > retirement.retire) {
      return retirement.afterDiscountRate;
    }else{
      return retirement.beforeDiscountRate;
    }
  }

  private getIncome(age: number, month: number, prev: Cashflow, retirement: Retirement) {
    if (age == +retirement.age + 1) {
      return retirement.monthlyIncome;
    } else if( age <= retirement.retire && month==1 ) {
      let addition = prev.income * retirement.growthRateIncome / 100;
      return +prev.income + +addition;
    } else if (age <= retirement.retire) {
      return prev.income;
    }
    return null;
  }

  private getExpense(age: number, retirement: Retirement) {
    if (age > retirement.retire) {
      return retirement.monthlyExpense;
    }
    return null;
  }

  private getSaving(age: number, month: number, retirement: Retirement) {
    if (age == (+retirement.retire + 1) && month == 1) {
      return retirement.otherReceived;
    }
    return null;
  }

  private getAccuSaving(accuSaving: number,cashflow: Cashflow) {
    return +accuSaving + +cashflow.income + +cashflow.saving - +cashflow.expense;
  }


}
