import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Button } from '../button/button.module';
import { FileDragNDropDirective } from './drag-and-drop.directive';
import { FileInputComponent } from './file-input.component';
import { FileInfoWProgressComponent } from '../file-info-w-progress/file-info-w-progress.component';

@NgModule({
    declarations: [
        FileInputComponent,
        FileDragNDropDirective,
        FileInfoWProgressComponent
    ],
    imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, Button],
    exports: [FileInputComponent],
})
export class FileInput { }
