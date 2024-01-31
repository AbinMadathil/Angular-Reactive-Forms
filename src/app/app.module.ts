import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsSampleComponent } from './forms-sample/forms-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsSampleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
