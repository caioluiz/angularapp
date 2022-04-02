import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product={
    name:'',
    value:0
  }

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {this.productService.readById( this.route.snapshot.params['id'] ).subscribe((product: any) => {
    this.product = product;
  })  
}

  updateProduct(): void{
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMessage("Produto Atualizado com Sucesso!")
      this.router.navigate(['/products'])
    })
  }

  cancelar(): void{
    this.router.navigate(['/products'])
  }

}
