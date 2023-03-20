import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileInputComponent } from './file-input.component';

@NgModule({
    declarations: [
        FileInputComponent
    ],
    imports: [CommonModule, FormsModule, HttpClientModule],
    exports: [FileInputComponent],
})
export class FileInput { }
