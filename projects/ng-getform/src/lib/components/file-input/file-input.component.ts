import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent {
  fileName: string = '';
  importFile: FormControl = new FormControl('')


  constructor(private http: HttpClient) {

  }
  onFileChange(e: any) {
    const file = e.files[0];

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append("file", file);
      console.log(formData)

      // const upload$ = this.http.post('/api/uploads', formData);
      // upload$.subscribe();


    }
    console.log(e.files[0])
  }

  labelClickHandler(e: Event) {
    if ((e.target as HTMLInputElement).type !== 'file')
      e.preventDefault()
  }
}
