import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { FileWProgress } from '../../types';

@Component({
  selector: 'lib-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})

export class FileInputComponent implements OnChanges {
  @ViewChild('fileInput') fileInput: any;
  @Input() name: string = '';
  @Input() control: FormControl = new FormControl(null);
  @Input() isMultipleFiles: boolean = false;
  @Input() resetFiles?: boolean = false;
  supportedFormats: string[] = ['JPEG', 'PNG', 'GIF', 'PDF', 'Word'];
  files: any[] = [];
  currentLoadingIndex: number = 0;

  constructor() { }

  ngOnChanges(): void {
    if (this.resetFiles === true) {
      this.control.setValue('')
      this.files = []
    }
  }

  handleFileChange(e: any) {
    this.setFilesToLocalState(e.target.files);
    this.setFilesToControl()
  }

  onFileDroped(e: any) {
    this.setFilesToLocalState(e)
    this.setFilesToControl()
  }

  labelClickHandler(e: Event) {
    if ((e.target as HTMLInputElement).type !== 'file')
      e.preventDefault()
  }

  setFilesToLocalState(filesList: Array<File>) {
    for (const file of filesList) {
      this.files.push(file);
    }
    this.setFilesProgress()
    this.uploadFilesSimulator(this.currentLoadingIndex);
  }

  setFilesProgress() {
    this.files.forEach((el: FileWProgress) => el.progress = 0)
  }

  setFilesToControl() {
    const dataTransferList = new DataTransfer();
    this.files.forEach((file) => dataTransferList.items.add(file));
    console.log(dataTransferList.files, 'dataTransferList');
    console.log(this.fileInput.nativeElement.value)
    this.control.patchValue({ ...dataTransferList.files })
  }

  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.currentLoadingIndex = index;
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 100);
      }
    }, 200);
  }

  deleteFile(event: number) {
    this.files = this.files.filter((el: any, index: number) => {
      if (index === event) {
        this.currentLoadingIndex--
        return
      }
      else return el
    })
  }
}
