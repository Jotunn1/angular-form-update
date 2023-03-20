import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioGroupComponent } from './radio-group.component';

@NgModule({
    declarations: [
        RadioGroupComponent
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [RadioGroupComponent],
})
export class RadioGroup { }
