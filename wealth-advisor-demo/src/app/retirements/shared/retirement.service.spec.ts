import { TestBed } from '@angular/core/testing';

import { RetirementService } from './retirement.service';

describe('RetirementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetirementService = TestBed.get(RetirementService);
    expect(service).toBeTruthy();
  });

  it('shouldReturnTotalExpense', () => {
    const service: RetirementService = TestBed.get(RetirementService);
    const expected: number = 5000;
    //const actual: number = service.getTotalExpense(35,60,85,40500,2.50);
    const actual: number = service.getTotalExpense(35,36,37,40500,2.50);
    expect(expected).toEqual(actual);
  });

  it('shouldReturnTotalSaving', () => {
    const service: RetirementService = TestBed.get(RetirementService);
    const expected: number = 5000;
    const actual: number = service.getTotalMonthlySaving(35,60,15000,5.00);
    expect(expected).toEqual(actual);
  });

});
