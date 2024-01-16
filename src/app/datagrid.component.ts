// datagrid.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
        <dxo-paging [enabled]="true"></dxo-paging>
        <dxi-column  
          width="auto"
          [minWidth]="100" 
          dataField="id" 
          caption="id">
        </dxi-column>
        <dxi-column  
          width="auto"
          [minWidth]="100"  
          dataField="name" 
          caption="Name">
        </dxi-column>
        <dxi-column   
          width="auto"
          [minWidth]="350"   
          dataField="productGroup.groupName" 
          caption="group">
        </dxi-column>
        <dxi-column 
          width="auto"
          [minWidth]="350"  
          dataField="productSubGroup.subGroupName" 
          caption="sub group">
        </dxi-column>
        <dxi-column
          caption="Status"
          [width]="180"
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
          [width]="250"
          [allowFiltering]="false"
          [allowSorting]="false"
          cellTemplate="actionTemplate"
        ></dxi-column>
        <div *dxTemplate="let action of 'actionTemplate'">
          <button 
            class="text-white p-3 text-center inline-flex items-center justify-center w-10 h-10 shadow-lg rounded-full {{!action.data.isActive ? 'bg-green-500' : 'bg-green-300'}}"
            (click)="this.setStatus(action.data, true)">
            A 
          </button>
          <button 
            class="text-white p-3 text-center inline-flex items-center justify-center w-10 h-10 shadow-lg ml-2 rounded-full {{action.data.isActive ? 'bg-orange-500' : 'bg-orange-300'}}"
            (click)="this.setStatus(action.data, false)">
             I 
          </button>
          <button 
            class="text-white p-3 text-center inline-flex items-center justify-center w-10 h-10 shadow-lg ml-2 rounded-full {{!action.data.softDelete ? 'bg-red-500' : 'bg-red-300'}}"
            (click)="this.softDelete(action.data)">
             D 
          </button>
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

  onSelectionChanged(e: any) {
    const selectedData = e.selectedRowsData[0]; // Assuming single selection
    if (selectedData) {
      this.selectedItemId = selectedData.id;
      console.log('Selected ID:', this.selectedItemId);
      this.selectedItemChanged.emit(this.selectedItemId);
    }
  }


  setStatus(data: Product, status: boolean) {
    // Implement logic to update status in your data source or call a service
    const accepted = window.confirm('Are you sure you want to proceed?');
    if (accepted) {
      this.productService.updateStatus(data.id, status).subscribe(
        (data: Product[]) => {
           // Send data here
          this.dataSource = data;
          this.sendData();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

  softDelete(data: Product) {
    // Implement logic for soft delete in your data source or call a service
    const accepted = window.confirm('Are you sure you want to proceed?');
    if (accepted) {
      this.productService.softDelete(data.id).subscribe(
        (data: Product[]) => {
           // Send data here
          this.dataSource = data;
          this.sendData();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

  sendData() {
    console.log('send data')
  }
}
