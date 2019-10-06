import { Customer } from "../model/customer";
import { apiParam } from "../model/param";

export const mockData: Customer = {
    "servers": [
        {
            "model": "HP DL120G7Intel G850",
            "ram": {
                "memory": "4",
                "unit": "GB",
                "type": "DDR3"
            },
            "hdd": {
                "memory": "1",
                "count": "4",
                "unit": "TB",
                "type": "SATA2"
            },
            "location": "AmsterdamAMS-01",
            "price": {
                "currency": "EUR",
                "currencySymbol": "€",
                "amountCents": 3999
            }
        },
        {
            "model": "Dell R210-IIIntel G530",
            "ram": {
                "memory": "4",
                "unit": "GB",
                "type": "DDR3"
            },
            "hdd": {
                "memory": "500",
                "count": "2",
                "unit": "GB",
                "type": "SATA2"
            },
            "location": "AmsterdamAMS-01",
            "price": {
                "currency": "EUR",
                "currencySymbol": "€",
                "amountCents": 3599
            }
        }
    ]
}

export const mockApiparam:apiParam = {
    storageMin: '0',
    storageMax: '72000',
    ram: '2GB',
    hdd: '8TB',
    location: 'Amsterdam'
}
