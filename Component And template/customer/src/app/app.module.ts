import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { EditComponentComponent } from './edit-component/edit-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailCustomerComponent,
    ListCustomerComponent,
    EditComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
