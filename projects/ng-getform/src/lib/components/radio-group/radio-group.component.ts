import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonItem } from '../../types';

const RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true,
};

@Component({
  selector: 'lib-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [RADIO_VALUE_ACCESSOR],
})

export class RadioGroupComponent implements ControlValueAccessor, OnInit {
  @Input() name: string = '';
  @Input() label?: string;
  @Input() items!: RadioButtonItem[];
  @Input() orientation: string = 'vertical';
  @Input() control: FormControl = new FormControl();
  @Input() isSubmitted: boolean = false;
  @Input() errorMessages: any;

  innerValue!: string | number | boolean;
  writeValue(value: string | number | boolean) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  constructor() { }

  ngOnInit() {
    this.innerValue = this.control.value;
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  change(value: string | number | boolean) {
    this.innerValue = value;
    this.onChange(value);
    this.onTouched(value);
  }
}

