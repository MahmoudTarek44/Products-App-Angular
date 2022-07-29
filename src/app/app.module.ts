// Main modules >>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

// Main Services >>
import { InterceptorService } from './Services/interceptor.service';
import { AuthenticationService } from './Services/authentication.service';
import { AuthenticationGuard } from './Guards/authentication.guard';
import { PricesPipe } from './Pipes/prices.pipe';
import { wishesReducer } from './State-Store/Wishes/wishes.reducer';

// App module components >>
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { ProductsCartComponent } from './Components/products-cart/products-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    HomeComponent,
    ErrorComponent,
    PricesPipe,
    ProductsCartComponent,
    WishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ wishes: wishesReducer }),
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
