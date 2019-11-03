import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { DelComponent } from './del/del.component';
import { MasterComponent } from './master/master.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    DelComponent,
    MasterComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent},
      { path : 'home', component : HomeComponent},
      
      { path: 'del', component: DelComponent},
      { path: 'master', component: MasterComponent},
      { path: 'product', component: ProductComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
