import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '../tooltip/tooltip.module';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
    declarations: [
        CheckboxComponent
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, TooltipModule],
    exports: [CheckboxComponent],
})
export class Checkbox { }
