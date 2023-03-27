import { Component, OnInit, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
let integer: number = 1;

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})

export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() isSubmitted: boolean = false;
  @Input() errorMessages: any;
  id: string = ''
  isChecked!: boolean;
  writeValue(value: boolean) {
    if (value !== this.isChecked) {
      this.isChecked = value;
    }
  }

  onChange: Function = () => { };
  onTouch: Function = () => { };

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  constructor() {
    this.id = `checkbox-${integer}`
    integer++
  }

  ngOnInit() {
    this.isChecked = this.control?.value;
  }

  change(e: boolean) {
    this.isChecked = e;
    this.onChange(e);
  }
}
