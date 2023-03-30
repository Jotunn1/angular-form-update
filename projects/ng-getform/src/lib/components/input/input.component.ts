import { Component, Input, OnInit, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnChanges {
  @Input() inputId = '';
  @Input() control: FormControl = new FormControl();
  @Input() label?: string = '';
  @Input() placeholder?: string = '';
  @Input() type = 'text';
  @Input() multiRows = false;
  @Input() errorMessages: any;
  @Input() validate: boolean = false;
  @Input() validator?: Validator;

  @HostBinding('attr.class') @Input() className?: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.validator) {
      // this.control.addValidators()
    }
    // console.log(this.control, 'input')
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if (this.validate) {
    //   this.control.setErrors()
    // }
    // console.log(this.control.errors, ' errors')
  }
}
