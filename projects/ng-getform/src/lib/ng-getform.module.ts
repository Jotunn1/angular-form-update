import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgGetformComponent } from './ng-getform.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { TooltipModule } from './components/tooltip/tooltip.module';

@NgModule({
  declarations: [
    NgGetformComponent,
    TooltipComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, TooltipModule, ReactiveFormsModule],
  exports: [NgGetformComponent],
})
export class NgGetForm {}
