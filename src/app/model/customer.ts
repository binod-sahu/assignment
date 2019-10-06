export interface Customer {
    servers: Servers[];
}

export interface Servers {
    model: string,
    ram: Ram;
    hdd: Hdd;
    location: string;
    price: Price;
}

export interface Ram {
    memory: string;
    unit: string;
    type: string;
}
export interface Hdd {
    memory: string;
    count: string;
    unit: string;
    type: string;
}
export interface Price {
    currency: string;
    currencySymbol: string;
    amountCents: number;
}

export interface Hddtype {
    value: string;
    viewValue: string;
}

export const HDDs: Hddtype[] = [
    {value: 'SAS', viewValue: 'SAS'},
    {value: 'SATA2', viewValue: 'SATA'},
    {value: 'SSD', viewValue: 'SSD'}
];

export interface checkboxContentType{
    value: number;
    name: string;
    checked:boolean;
}

export const checkboxContent: checkboxContentType[] = [
    {value: 2, name: '2GB', checked: false},
    {value: 4, name: '4GB', checked: false},
    {value: 8, name: '8GB', checked: false},
    {value: 12, name: '12GB', checked: false},
    {value: 16, name: '16GB', checked: false},
    {value: 24, name: '24GB', checked: false},
    {value: 32, name: '32GB', checked: false},
    {value: 48, name: '48GB', checked: false},
    {value: 64, name: '64GB', checked: false},
    {value: 96, name: '96GB', checked: false},
];

