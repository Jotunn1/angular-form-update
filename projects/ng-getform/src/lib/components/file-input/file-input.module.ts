import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Button } from '../button/button.module';
import { FileDragNDropDirective } from './drag-and-drop.directive';
import { FileInputComponent } from './file-input.component';

@NgModule({
    declarations: [
        FileInputComponent,
        FileDragNDropDirective,
    ],
    imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, Button],
    exports: [FileInputComponent],
})
export class FileInput { }
