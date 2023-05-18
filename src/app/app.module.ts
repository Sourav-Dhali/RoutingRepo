import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginnComponent } from './loginn/loginn.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';
import { CardComponent } from './card/card.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/loginn',
    pathMatch: 'full'
  },
  { path: 'loginn', component: LoginnComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'tv', component: TvComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'washingmachine', component: WashingmachineComponent }
    ]
  },
  {
    path: 'contact',
    children: [
      { path: 'laptop', component: LaptopComponent },
      { path: 'tv', component: TvComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'washingmachine', component: WashingmachineComponent }
    ]
  },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PushSpliceComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    NotfoundComponent,
    LoginnComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    WashingmachineComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
