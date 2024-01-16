// src/app/product.model.ts
export class Product {
  constructor(
    public id: number,
    public name: string,
    public productGroup: Group,
    public productSubGroup: SubGroup,
    public nameJp: string,
    public nameKr: string,
    public availableUnit: number,
    public isActive: boolean,
    public softDelete: boolean,
  ) { }
}


export class Group {
  constructor(
    public id: number,
    public groupName: string,
  ) { }
}


export class SubGroup {
  constructor(
    public id: number,
    public productGroup: Group,
    public subGroupName: string,
  ) { }
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