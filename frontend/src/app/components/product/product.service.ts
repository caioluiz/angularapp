import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl= "http://localhost:3001/products"

  constructor( private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackbar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
  readById(id: number){
    return this.http.get( `${this.baseUrl}/${id}` )
  }
  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}` //não esqueça do id!!! se não a pag. não atualiza
    return this.http.put<Product>(url, product)
  }
  delete(product: Product): Observable<Product>{
    return this.http.delete<Product>(`${this.baseUrl}/${product.id}`) //não esqueça do id!!! se não a pag. não atualiza
  }
}

