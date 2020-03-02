import { Component, OnInit } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  id:number;
  private headers = new Headers({
    'Content-Type':'application/json'
  });

  products = [];
  fetchData = function() {
    this.http.get("http://localhost:3000/products").subscribe(
      (res:Response)=>{
        this.products = res;
        // console.log(res);
      }
    )
  }

  deleteProduct = function(id) {
    if(confirm("Are You Sure?")){
      const url = `${"http://localhost:3000/products"}/${id}`;
      return this.http.delete(url, {headers:this.headers}).toPromise()
      .then(()=>{
        this.fetchData();
      });
    }
  }

  ngOnInit(): void {
    // let resp = this.http.get("http://localhost:3000/products");
    // resp.subscribe((data)=>console.log(data));
    this.fetchData();
  }

}
