import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select.component';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
    declarations: [
        SelectComponent
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, TooltipModule],
    exports: [SelectComponent],
})
export class Select { }
