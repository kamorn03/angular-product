// src/app/product.model.ts
export class Product {
    constructor(
      public id: number,
      public name: string,
      public group: string,
      public subGroup: string,
      public name_jp: string,
      public name_kr: string,
      public available_unit: number,
      public status: string,
    ) {}
  }