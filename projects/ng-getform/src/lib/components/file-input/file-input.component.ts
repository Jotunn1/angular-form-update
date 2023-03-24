import { Component, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileWProgress } from '../../types';

@Component({
  selector: 'lib-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent {
  @ViewChild('fileInput') fileInput: any;
  @Input() name: string = '';
  @Input() control: FormControl = new FormControl(null);
  @Input() isMultipleFiles: boolean = false;
  supportedFormats: string[] = ['JPEG', 'PNG', 'GIF', 'PDF', 'Word'];
  files: any[] = [];
  currentLoadingIndex: number = 0;
  dataUrlsArray: any[] = []

  constructor() { }

  onFileChange(e: any) {
    this.setFiles(e.target.files);
  }
  onFileDroped(e: any) {
    this.setFiles(e)
  }

  labelClickHandler(e: Event) {
    if ((e.target as HTMLInputElement).type !== 'file')
      e.preventDefault()
  }

  setFiles(filesList: Array<File>) {
    console.log(filesList)
    for (const file of filesList) {
      this.files.push(file);
      const reader = new FileReader();
      reader.addEventListener('loadend', () => this.dataUrlsArray.push(reader.result));
      reader.readAsDataURL(file);
    }
    this.setFilesProgress()
    this.uploadFilesSimulator(this.currentLoadingIndex);
    this.setFilesToControl()
  }
  setFilesProgress() {
    this.files.forEach((el: FileWProgress) => el.progress = 0)
  }

  setFilesToControl() {
    console.log(this.dataUrlsArray)
    this.control.patchValue([...this.dataUrlsArray])
  }

  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.currentLoadingIndex++
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
      if (index === event) return
      else return el
    })
  }
}
