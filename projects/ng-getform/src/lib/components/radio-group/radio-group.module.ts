import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioGroupComponent } from './radio-group.component';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
    declarations: [
        RadioGroupComponent
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, TooltipModule],
    exports: [RadioGroupComponent],
})
export class RadioGroup { }
