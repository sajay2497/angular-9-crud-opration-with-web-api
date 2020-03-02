import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:HttpClient, public router: Router) { }
  confirmationString:string = "New Product Has Been Added";
  isAdded: boolean = false;
  productObj:object = {};

  addNewProduct = function(product) {
    this.productObj = {
      "name":product.name,
      "color":product.color
    }
    this.http.post("http://localhost:3000/products", this.productObj).subscribe((res:Response)=>{
      // console.log(res);
      this.router.navigate(['/']);
      this.isAdded = true;
      
    })
  }

  ngOnInit(): void {
  }

}
