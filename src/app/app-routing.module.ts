import { AuthenticationGuard } from './Guards/authentication.guard';
import { ProductsCartComponent } from './Components/products-cart/products-cart.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ErrorComponent } from './Components/error/error.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Products', pathMatch: 'full' },
  {
    path: 'Products',
    component: ProductsComponent,
  },
  {
    path: 'Products/Cart',
    component: ProductsCartComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'Products/Product/:id',
    component: ProductDetailsComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'Auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
