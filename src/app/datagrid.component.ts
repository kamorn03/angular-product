// datagrid.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  template: `
    <div id="data-grid-demo">
      <dx-data-grid
        [dataSource]="dataSource"
        [columns]="columns"
        [filterRow]="{ visible: true, applyFilter: 'auto' }"
      ></dx-data-grid>
    </div>
  `,
})
export class DataGridComponent implements OnInit {
  dataSource: any[] = [];
  columns: any[] = [];

  ngOnInit() {
    // Set up your sample data
    this.dataSource = [
      { ID: 1, Name: 'John Doe', Age: 30, City: 'New York' },
      { ID: 2, Name: 'Jane Smith', Age: 25, City: 'Los Angeles' },
      // Add more data as needed
    ];

    this.columns = [
      { dataField: 'ID', caption: 'ID' },
      { dataField: 'Name', caption: 'Name' },
      { dataField: 'Age', caption: 'Age' },
      { dataField: 'City', caption: 'City' },
    ];
  }
}
