import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  exist: boolean;
  constructor(private http:HttpClient,private router: Router, private route: ActivatedRoute,) { }
  id:number;
  data:object = {};
  products = [];
  // exist = false;
  productObj:object = {};
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});

  updateProduct(product) {
    this.productObj = {
      "name": product.name,
      "color": product.color
    };
    const url = `${"http://localhost:3000/products"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.productObj), {headers: this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      })
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:3000/products").subscribe(
      (res: Response) => {
        this.products = res;
        for(var i = 0; i < this.products.length ; i++) {
          if(parseInt(this.products[i].id) === this.id) {
            this.exist = true;
            this.data = this.products[i];
            console.log(this.data);
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }

}
