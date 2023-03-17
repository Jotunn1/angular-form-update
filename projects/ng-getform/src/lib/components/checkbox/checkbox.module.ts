import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
    declarations: [
        CheckboxComponent
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [CheckboxComponent],
})
export class Checkbox { }
