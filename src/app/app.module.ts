import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { ProductComponent } from './product/product.component';
import { DataGridComponent } from './datagrid.component';

@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    DxDataGridModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DataGridComponent,
    ProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/