export class Retirement {
    _id: string;
    _rev?: string;
    type: string = 'model';
    age: number;
    retire: number;
    lifespan: number;
    currentSaving: number;
    otherReceived: number;
    monthlyIncome: number;
    growthRateIncome: number;
    monthlyExpense: number;
    beforeDiscountRate: number;
    afterDiscountRate: number
    inflation: number;
    cashflows?: Array<Cashflow>;
}

export class Cashflow {
    _id: string;
    modelId: string;
    type: string = 'cashflow';
    seq: number;
    age: number;
    month: number;
    saving: number;
    income: number;
    expense: number;
    returnRate: number;
    accuSaving: number;
    accuExpense: number;
}

// monthly payment