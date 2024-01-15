import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product?: Product;
  private routeSubscription: Subscription;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.routeSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const productId = Number(params['id']);
      this.productService.getProductById(productId).subscribe(
        (data: Product) => {
          this.product = data;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}