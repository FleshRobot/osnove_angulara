import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { NgModelExampleComponent } from './ng-model-example/ng-model-example.component';


const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'mycart', component: MyCartComponent },
  { path: 'ngModelExample', component: NgModelExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
