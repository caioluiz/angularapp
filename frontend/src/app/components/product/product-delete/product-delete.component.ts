import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product={
    name:'',
    value:0
  }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {this.productService.readById( this.route.snapshot.params['id'] ).subscribe((product: any) => {
    this.product = product;
  })
}

  deleteProduct(): void{
    this.productService.delete(this.product).subscribe(()=>{
      this.productService.showMessage('Produto Deletado com Sucesso!')
      this.router.navigate(['/products'])
    })

  }
  cancelar(): void{
    this.router.navigate(['/products'])
  }
}
