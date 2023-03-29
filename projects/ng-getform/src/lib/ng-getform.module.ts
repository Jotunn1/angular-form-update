import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Checkbox } from './components/checkbox/checkbox.module';
import { Select } from './components/select/select.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgGetformComponent } from './ng-getform.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { InputComponent } from './components/input/input.component';
import { TooltipModule } from './components/tooltip/tooltip.module';
import { RadioGroup } from './components/radio-group/radio-group.module';
import { Button } from './components/button/button.module';
import { UnvalidIcon } from './components/unvalid-icon/unvalid-icon.module';

@NgModule({
  declarations: [
    NgGetformComponent,
    TooltipComponent,
    InputComponent,
  ],
  imports: [CommonModule, TooltipModule, FormsModule, ReactiveFormsModule, Checkbox, Select, RadioGroup, Button, UnvalidIcon],
  exports: [NgGetformComponent],
})
export class NgGetForm { }
