import { Product } from './../../components/product/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-angularapp',
  templateUrl: './product-angularapp.component.html',
  styleUrls: ['./product-angularapp.component.css']
})
export class ProductAngularappComponent implements OnInit {

  product: Product={
    name:'',
    value:0
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']) //ev. binding
  }

}