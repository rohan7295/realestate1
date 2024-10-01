import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcConstructionComponent } from './abc-construction/abc-construction.component';
import { BuyRentOfflineComponent } from './buy-rent-offline/buy-rent-offline.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OnlineBuyComponent } from './online-buy/online-buy.component';
import { PayComponent } from './pay/pay.component';
import { RentHomeComponent } from './rent-home/rent-home.component';
import { SellPropertiesComponent } from './sell-properties/sell-properties.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';
import { XyzBuildersComponent } from './xyz-builders/xyz-builders.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path:'online-buy' , component:OnlineBuyComponent},
  {path:'sell-properties',component:SellPropertiesComponent},
  {path:'rent-home',component:RentHomeComponent},
  {path:'buy-rent-offline',component:BuyRentOfflineComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart',component:CartComponent},
  {path:'abc-construction',component:AbcConstructionComponent},
  {path:'xyz-builders',component:XyzBuildersComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'subscription',component:SubscriptionComponent},
  {path:'pay',component:PayComponent},
  {path:'card-payment',component:CardPaymentComponent},
  {path:'upi-payment',component:UpiPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
