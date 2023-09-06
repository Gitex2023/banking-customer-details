import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HttpClientModule } from "@angular/common/http";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  entryComponents: [CustomerDetailsComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const componentElement = createCustomElement(CustomerDetailsComponent, {
      injector,
    });
    customElements.define('app-journey-auth', componentElement);
  }
  ngDoBootstrap() {}
 }
