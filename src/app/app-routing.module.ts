import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginnComponent } from './loginn/loginn.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { TvComponent } from './products/tv/tv.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginn',
    pathMatch: 'full'
  },
  { 
    path: 'loginn', component: LoginnComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'products',
    // component: ContactComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
