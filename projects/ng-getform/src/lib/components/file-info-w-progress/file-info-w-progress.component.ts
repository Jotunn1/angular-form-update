import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-file-info-w-progress',
  templateUrl: './file-info-w-progress.component.html',
  styleUrls: ['./file-info-w-progress.component.scss']
})
export class FileInfoWProgressComponent {
  @Input() name: string = '';
  @Input() progress: number = 0;
  @Input() fileIndex: number = 0;
  @Output() deleteClickEvent = new EventEmitter<number>();

  deleteButtonHandle(e: Event) {
    e.preventDefault();
    this.deleteClickEvent.emit(this.fileIndex)
  }
}
