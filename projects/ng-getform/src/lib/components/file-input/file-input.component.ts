import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent {
  @Input() isMultipleFiles: boolean = false;
  supportedFormats: string[] = ['JPEG', 'PNG', 'GIF', 'PDF', 'Word'];
  importFile: FormControl = new FormControl('')
  fileName: string = '';

  constructor(private http: HttpClient) {

  }
  onFileChange(e: any) {
    // const file = e.files[0];
    console.log(e);
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

  labelClickHandler(e: Event) {
    if ((e.target as HTMLInputElement).type !== 'file')
      e.preventDefault()
  }
}
