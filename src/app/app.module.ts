import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form/basic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
