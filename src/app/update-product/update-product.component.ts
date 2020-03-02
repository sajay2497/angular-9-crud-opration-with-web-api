import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  constructor(private http:HttpClient,private router: Router, private route: ActivatedRoute,) { }
  id:number;
  data:object = {};
  products = [];
  // exist = false;
  productObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  updateProduct(product) {
    
  }
  ngOnInit() {
  }

}
