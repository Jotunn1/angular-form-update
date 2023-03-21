import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent {
  @Input() name: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() isMultipleFiles: boolean = false;
  supportedFormats: string[] = ['JPEG', 'PNG', 'GIF', 'PDF', 'Word'];
  importFile: FormControl = new FormControl('')
  fileName: string = '';
  files: File[] = []

  constructor(private http: HttpClient) {

  }
  onFileChange(e: any) {
    this.files = Object.keys(e.target.files).map((key: any) => e.target.files[key])
    // const file = e.files[0];
    console.log(this.files, 'files');
    // if (file) {
    //   this.fileName = file.name;
    //   const reader = new FileReader();
    // addListeners(reader, file);
    // reader.readAsDataURL(file);
    // console.log(reader)
    // const formData = new FormData();
    // formData.append("file", file);
    // console.log(formData)

    // const upload$ = this.http.post('/api/uploads', formData);
    // upload$.subscribe();
    // }
  }
  onFileDroped(e: any) {
    console.log(e)
  }

  labelClickHandler(e: Event) {
    if ((e.target as HTMLInputElement).type !== 'file')
      e.preventDefault()
  }
}
