// src/app/product/product.component.ts
import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Group, Product, SubGroup } from '../product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  title = 'Products';
  selectedItemId!: number;
  product?: Product[];
  $data: any;
  group?: Group[];
  subGroup?: SubGroup[];
  isActive: string | undefined;

  // value of search
  name: string | null | undefined;
  selectedGroup: string | null | undefined;
  selectedSubGroup: string | null | undefined;
  selectedActive: string | null | undefined;

  private routeSubscription: Subscription;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.routeSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.productService.getGroup().subscribe(
        (data: Group[]) => {
          this.group = data;
        },
        (error) => {
          console.error('Error:', error);
        }
      );

      this.productService.getSubGroup().subscribe(
        (data: SubGroup[]) => {
          this.subGroup = data;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    });
  }

  onSelectGroupChanged() {
    if (this.selectedGroup) {
      this.productService.getSubGroupฺฺByGroup(Number(this.selectedGroup)).subscribe(
        (data: SubGroup[]) => {
          this.subGroup = data;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

  onSelectSubGroupChanged() {
    // console.log('LOG sub : ', this.selectedSubGroup)
  }

  // search !!!!!!! ****
  searchData() {
    // value of search
    const data = {
      name: this.name,
      groupId: Number(this.selectedGroup) === 0 || this.selectedGroup === null ? null : Number(this.selectedGroup),
      subGroupId: Number(this.selectedSubGroup) === 0 || this.selectedSubGroup === null ? null : Number(this.selectedSubGroup),
      isActive: this.selectedActive ? this.selectedActive === 'active' ? true : false : null
    }
    this.productService.searchDataApi(data).subscribe(
      (data: Product[]) => {
        this.product = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  // clear !!!!!!! ****
  clearData() {
    // value of search
    this.selectedSubGroup = null;
    this.selectedGroup = null;
    this.name = null;
    this.selectedActive = null;

    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.product = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onSelectedItemChanged(itemId: number) {
    this.selectedItemId = itemId;
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
