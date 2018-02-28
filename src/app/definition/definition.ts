export class Definition{
    kpi: string;
    description: string;
    dataType: string;
    displayName: string;
    kpiType: string;
    uom: string;
    asset: string;
    manual: boolean;
    frequency: number;
    unit: string;
    reportingAggregation: string;
    state: string;
    goodDirection: string;
    effectiveDateTime: DateTimeFormat;
    raiseEvents: boolean;
    securityCode: string;
    basedOn: string;
    calculationDealy: string;
    isComposite: boolean;
    timeVariants: string[];
    limitSource: string;
    assetAttribute: string;
    stringField1: string;
    stringField2: string;
    stringField3: string;
    stringField4: string;
    stringField5: string;
    stringField6: string;
    stringField7: string;
    stringField8: string;
    stringField9: string;
    stringField10: string;
    stringField11: string;
    stringField12: string;
    stringField13: string;
    numericField1: string;
    numericField2: string;
    numericField3: string;
    numericField4: string;
    numericField5: string;
}

export const timeVariants = ['Hourly', 'Monthly', 'Daily', 'Yearly'];

export const units = ['Hours', 'Days', 'Months', 'Weeks'];

export const reportingAggregations = ['Min', 'Max', 'Average', 'Total', 'Last', 'TimeSeries'];

export const states = ['Active', 'InActive', 'InProgress'];

export const goodDirections = ['Above', 'Below', 'Between'];