import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AbcConstructionComponent } from './abc-construction/abc-construction.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyRentOfflineComponent } from './buy-rent-offline/buy-rent-offline.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OnlineBuyComponent } from './online-buy/online-buy.component';
import { PayComponent } from './pay/pay.component';
import { RentHomeComponent } from './rent-home/rent-home.component';
import { SellPropertiesComponent } from './sell-properties/sell-properties.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';
import { XyzBuildersComponent } from './xyz-builders/xyz-builders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OnlineBuyComponent,
    SellPropertiesComponent,
    RentHomeComponent,
    BuyRentOfflineComponent,
    ContactComponent,
    CartComponent,
    AbcConstructionComponent,
    XyzBuildersComponent,
    SignUpComponent,
    SignInComponent,
    SubscriptionComponent,
    PayComponent,
    CardPaymentComponent,
    UpiPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
