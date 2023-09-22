import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule, FormFieldModule, InputModule } from 'ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputModule,
    FormsModule,
    FormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
