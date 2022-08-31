import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandaloneTestComponent } from './standalone-test/standalone-test.component';
import { StandaloneChildComponent } from './standalone-child/standalone-child.component';

@NgModule({
  declarations: [
    AppComponent,
    StandaloneTestComponent,
    StandaloneChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
