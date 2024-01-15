// src/app/product.model.ts
export class Product {
    constructor(
      public id: number,
      public name: string,
      public groupName: string,
      public subGroupName: string,
      public nameJp: string,
      public nameKr: string,
      public availableUnit: number,
      public isActive: boolean,
    ) {}
  }

// {  
//   "id": 3,
//   "name": "Americano",
//   "isActive": false,
//   "groupName": "Coffee",
//   "subGroupName": "Hot Drinks",
//   "nameJp": "アメリカーノ",
//   "nameKr": "아메리카노",
//   "availableUnit": 0,
//   "softDelete": false
// }