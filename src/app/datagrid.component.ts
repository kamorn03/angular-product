// datagrid.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { products } from './product'

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
        <dxi-column dataField="id" caption="id"></dxi-column>
        <dxi-column dataField="name" caption="Name"></dxi-column>
        <dxi-column dataField="group" caption="group"></dxi-column>
        <dxi-column dataField="subGroup" caption="subGroup"></dxi-column>
        <dxi-column dataField="active" caption="IsActive">

          {{this.statusTemplate}}
        </dxi-column>
        <dxi-column
          caption="Actions"
          [allowSorting]="false"
          [allowFiltering]="false"
        >
        <div *dxTemplate="let data of 'cellTemplate'">
          <button (onClick)="setStatus(data, 'inactive')">Deactivate</button>
        </div>
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
    this.dataSource = products

    this.columns = [
      { dataField: 'id', caption: 'ID' },
      { dataField: 'name', caption: 'Name' },
      { dataField: 'status', caption: 'Status' },
      // ... other columns ...
    ];
  }

  statusTemplate = (cellElement: any, cellInfo: any) => {
    const status = cellInfo.data.status;
    const bannerClass = 'status-banner';
    const bannerText = status === 'active' ? 'Active' : status === 'inactive' ? 'Inactive' : 'Deleted';
    return `<div class="<span class="math-inline">\{bannerClass\}"\></span>{bannerText}</div>`;
  };

  actionsTemplate = (cellElement: any, cellInfo: any) => {
    const data = cellInfo.data;
    return `
    <dx-button (onClick)="setStatus(data, 'active')">Activate</dx-button>
    <dx-button (onClick)="setStatus(data, 'inactive')">Deactivate</dx-button>
    <dx-button (onClick)="softDelete(data)">Delete</dx-button>
    `;
  };

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
