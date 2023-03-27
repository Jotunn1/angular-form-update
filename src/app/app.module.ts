import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Checkbox, NgGetForm, Select, RadioGroup, FileInput } from 'ng-getform';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgGetForm, Checkbox, Select, RadioGroup, ReactiveFormsModule, FileInput],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
