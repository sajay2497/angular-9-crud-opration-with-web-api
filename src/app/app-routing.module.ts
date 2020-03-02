import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FormsModule }   from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'product' , component:ProductComponent},
  {path:'updateProduct/:id' , component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule     ]
})
export class AppRoutingModule { }
