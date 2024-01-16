// src/app/product/product.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Group, SubGroup } from '../product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  title = 'Products';
  selectedItemId!: number;
  group?: Group[];
  subGroup?: SubGroup[];
  isActive: boolean | undefined;

  // value of search
  name: string | undefined;
  selectedGroup: string | undefined;
  selectedSubGroup: string | undefined;
  selectedActive: boolean | undefined;

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

    console.log('selectedSubGroup', this.selectedSubGroup)
  }


  // search !!!!!!! ****

  // clear !!!!!!! ****


  onSelectedItemChanged(itemId: number) {
    this.selectedItemId = itemId;
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
