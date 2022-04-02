import { Product } from './../../components/product/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

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

  constructor( private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadrasto de Produtos',
      icon: 'storefront',
      routerUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']) //ev. binding
  }

}