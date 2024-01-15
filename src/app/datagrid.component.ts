// datagrid.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  template: `
    <div id="data-grid-demo">
      <dx-data-grid
        [dataSource]="dataSource"
        [columns]="columns"
        [filterRow]="{ visible: true, applyFilter: 'auto' }"
        [selection]="{
          mode: 'single',
          showCheckBoxesMode: 'always'
        }"
        (onSelectionChanged)="onSelectionChanged($event)"
      >
        <dxi-column dataField="id" caption="id"></dxi-column>
        <dxi-column dataField="name" caption="Name"></dxi-column>
        <dxi-column dataField="status" caption="Status"></dxi-column>
        <dxi-column
          caption="Actions"
          [allowSorting]="false"
          [allowFiltering]="false"
        >
          <dxi-column>
            <div *dxTemplate="let data of 'cellTemplate'">
              <button (click)="setStatus(data.data, 'active')">Activate</button>
              <button (click)="setStatus(data.data, 'inactive')">Deactivate</button>
              <button (click)="softDelete(data.data)">Delete</button>
            </div>
          </dxi-column>
        </dxi-column>
      </dx-data-grid>
    </div>
  `,
})
export class DataGridComponent implements OnInit {
  @Output() selectedItemChanged = new EventEmitter<number>();
  dataSource!: any[];
  columns!: any[];
  selectedItemId!: number;

  ngOnInit() {
    // Set up your sample data
    this.dataSource = [
      {
        id: 1,
        name: 'Espresso',
        status: 'In stock',
        group: 'Coffee',
        subGroup: 'Hot Drinks',
        name_jp: 'エスプレッソ',
        name_kr: '에스프레소',
        available_unit: 100,
      },
      {
        id: 2,
        name: 'Latte',
        status: 'In stock',
        group: 'Coffee',
        subGroup: 'Hot Drinks',
        name_jp: 'ラテ',
        name_kr: '라떼',
        available_unit: 75,
      },
      {
        id: 3,
        name: 'Americano',
        status: 'Out of stock',
        group: 'Coffee',
        subGroup: 'Hot Drinks',
        name_jp: 'アメリカーノ',
        name_kr: '아메리카노',
        available_unit: 0,
      },
      {
        id: 4,
        name: 'Cappuccino',
        status: 'In stock',
        group: 'Coffee',
        subGroup: 'Hot Drinks',
        name_jp: 'カプチーノ',
        name_kr: '카푸치노',
        available_unit: 50,
      },
      {
        id: 5,
        name: 'Iced Coffee',
        status: 'In stock',
        group: 'Coffee',
        subGroup: 'Cold Drinks',
        name_jp: 'アイスコーヒー',
        name_kr: '아이스 커피',
        available_unit: 120,
      },
      {
        id: 6,
        name: 'Green Tea',
        status: 'In stock',
        group: 'Tea',
        subGroup: 'Hot Drinks',
        name_jp: '緑茶',
        name_kr: '녹차',
        available_unit: 80,
      },
      {
        id: 7,
        name: 'Herbal Tea',
        status: 'In stock',
        group: 'Tea',
        subGroup: 'Hot Drinks',
        name_jp: 'ハーブティー',
        name_kr: '허브 차',
        available_unit: 60,
      },
      {
        id: 8,
        name: 'Sushi Set A',
        status: 'In stock',
        group: 'Japanese',
        subGroup: 'Sushi',
        name_jp: '寿司セットA',
        name_kr: '초밥 세트A',
        available_unit: 30,
      },
      {
        id: 9,
        name: 'Sushi Set B',
        status: 'Out of stock',
        group: 'Japanese',
        subGroup: 'Sushi',
        name_jp: '寿司セットB',
        name_kr: '초밥 세트B',
        available_unit: 0,
      },
      {
        id: 12,
        name: 'Ramen',
        status: 'In stock',
        group: 'Japanese',
        subGroup: 'Noodles',
        name_jp: 'ラーメン',
        name_kr: '라면',
        available_unit: 40,
      },
      {
        id: 11,
        name: 'Tempura Udon',
        status: 'In stock',
        group: 'Japanese',
        subGroup: 'Noodles',
        name_jp: '天ぷらうどん',
        name_kr: '튀김우동',
        available_unit: 25,
      },
      {
        id: 13,
        name: 'Yakitori',
        status: 'In stock',
        group: 'Japanese',
        subGroup: 'Grilled Skewers',
        name_jp: '焼き鳥',
        name_kr: '야끼토리',
        available_unit: 50,
      },
      {
        id: 14,
        name: 'Takoyaki',
        status: 'In stock',
        group: 'Japanese',
        subGroup: 'Street Food',
        name_jp: 'たこ焼き',
        name_kr: '타코야끼',
        available_unit: 45,
      },
      {
        id:15,
        name: 'Okonomiyaki',
        status: 'In stock',
        group: 'Japanese',
        subGroup: 'Street Food',
        name_jp: 'お好み焼き',
        name_kr: '오코노미야끼',
        available_unit: 35,
      },
      {
        id: 16,
        name: 'Miso Soup',
        status: 'In stock',
        group: 'Japanese',
        subGroup: 'Soup',
        name_jp: '味噌汁',
        name_kr: '미소 스프',
        available_unit: 60,
      },
      {
        id: 17,
        name: 'Matcha Latte',
        status: 'In stock',
        group: 'Japanese',
        subGroup: 'Hot Drinks',
        name_jp: '抹茶ラテ',
        name_kr: '말차 라떼',
        available_unit: 55,
      },
      {
        id: 18,
        name: 'Dorayaki',
        status: 'In stock',
        group: 'Japanese',
        subGroup: 'Dessert',
        name_jp: 'どら焼き',
        name_kr: '도라야끼',
        available_unit: 20,
      },
      {
        id: 19,
        name: 'Taiyaki',
        status: 'In stock',
        group: 'Japanese',
        subGroup: 'Dessert',
        name_jp: 'たい焼き',
        name_kr: '타이야키',
        available_unit: 15,
      },
      {
        id: 20,
        name: 'Sashimi Platter',
        status: 'In stock',
        group: 'Japanese',
        subGroup: 'Sashimi',
        name_jp: '刺身プレート',
        name_kr: '사시미 플래터',
        available_unit: 30,
      },
      // Add more data as needed
    ];

    this.columns = [
      { dataField: 'id', caption: 'ID' },
      { dataField: 'name', caption: 'Name' },
      { dataField: 'status', caption: 'Status' },
      // ... other columns ...
    ];
  }

  onSelectionChanged(e: any) {
    const selectedData = e.selectedRowsData[0]; // Assuming single selection
    if (selectedData) {
      this.selectedItemId = selectedData.id;
      console.log('Selected ID:', this.selectedItemId);
      this.selectedItemChanged.emit(this.selectedItemId);
    }
  }

  setStatus(data: any, status: string) {
    // Implement logic to update status in your data source or call a service
    console.log(`Setting status to ${status} for ID: ${data.ID}`);
  }

  softDelete(data: any) {
    // Implement logic for soft delete in your data source or call a service
    console.log(`Soft deleting ID: ${data.ID}`);
  }
}
