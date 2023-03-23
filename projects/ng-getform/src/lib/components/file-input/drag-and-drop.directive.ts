import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[fileDragDrop]'
})

export class FileDragNDropDirective {
    @Output() private filesChangeEmiter: EventEmitter<File[]> = new EventEmitter();
    @HostBinding('style.background-color') private background = 'rgba(241, 242, 244, 0.5)';
    @HostBinding('style.border') private borderStyle = '';
    @HostBinding('style.border-color') private borderColor = '#9B9CA0';

    constructor() { }

    @HostListener('dragover', ['$event']) public onDragOver(evt: Event) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = 'lightgray';
        this.borderColor = '#2F55B7';
        this.borderStyle = '2px solid';
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(evt: Event) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = 'rgba(241, 242, 244, 0.5)';
        this.borderStyle = 'none'
    }

    @HostListener('drop', ['$event']) public onDrop(evt: any) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = 'rgba(241, 242, 244, 0.5)';
        const files = evt.dataTransfer.files;
        const valid_files: Array<File> = files;
        this.filesChangeEmiter.emit(valid_files);
    }
}