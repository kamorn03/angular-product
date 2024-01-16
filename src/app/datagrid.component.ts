// datagrid.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { products } from './product'
import { ProductService } from './product.service';
import { Product } from './product.model';

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
        <!-- <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxo-header-filter [visible]="true"></dxo-header-filter>
        <dxo-group-panel [visible]="true"></dxo-group-panel>
        <dxo-scrolling mode="virtual"></dxo-scrolling>
        <dxo-editing
          mode="row"
          [allowAdding]="true"
          [allowUpdating]="true"
          [allowDeleting]="true"
        >
        </dxo-editing> -->
        <dxo-paging [enabled]="true"></dxo-paging>
        <dxi-column dataField="id" caption="id"></dxi-column>
        <dxi-column dataField="name" caption="Name"></dxi-column>
        <dxi-column dataField="productGroup.groupName" caption="group"></dxi-column>
        <dxi-column dataField="productSubGroup.subGroupName" caption="sub group"></dxi-column>

        <dxi-column
          caption="Status"
          [width]="100"
          [allowFiltering]="false"
          [allowSorting]="false"
          cellTemplate="activeTemplate"
        ></dxi-column>
        <div *dxTemplate="let item of 'activeTemplate'">
          <button *ngIf="item.data.isActive && !item.data.softDelete" class="text-sm px-4 py-2 bg-green-400 text-white rounded-lg  tracking-wider hover:bg-green-300 outline-none">
            active
          </button>
          <button *ngIf="!item.data.isActive && !item.data.softDelete" class="text-sm px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
            inactive
          </button>
          <button *ngIf="item.data.softDelete" class="text-sm px-4 py-2 bg-red-400 text-white rounded-lg  tracking-wider hover:bg-red-300 outline-none">
            deleted
          </button>
        </div>
        <!-- click to change status -->
        <dxi-column
          dataField="id"
          [width]="100"
          [allowFiltering]="false"
          [allowSorting]="false"
          cellTemplate="actionTemplate"
        ></dxi-column>
        <div *dxTemplate="let data of 'actionTemplate'">
          <button >{{data.value}}</button>
          <button>test</button>
          <button>test</button>
        </div>
      </dx-data-grid>
    </div>
  `,
})
export class DataGridComponent implements OnInit {
  @Output() selectedItemChanged = new EventEmitter<number>();
  dataSource!: Product[];
  columns!: any[];
  selectedItemId!: number;

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit() {
    // Set up your sample data
    // this.dataSource = this.productService.getProducts

    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.dataSource = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  // statusTemplate = (cellElement: any, cellInfo: any) => {
  //   const status = cellInfo.data.status;
  //   const bannerClass = 'status-banner';
  //   const bannerText = status === 'active' ? 'Active' : status === 'inactive' ? 'Inactive' : 'Deleted';
  //   return `<div class="<span class="math-inline">\{bannerClass\}"\></span>{bannerText}</div>`;
  // };

  // actionsTemplate = (cellElement: any, cellInfo: any) => {
  //   const data = cellInfo.data;
  //   return `
  //   <dx-button (onClick)="setStatus(data, 'active')">Activate</dx-button>
  //   <dx-button (onClick)="setStatus(data, 'inactive')">Deactivate</dx-button>
  //   <dx-button (onClick)="softDelete(data)">Delete</dx-button>
  //   `;
  // };

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
