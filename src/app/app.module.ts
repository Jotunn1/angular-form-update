import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgGetForm } from 'ng-getform';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgGetForm],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
