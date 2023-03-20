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
  @Input() label?: string;
  @Input() control?: FormControl;
  id: string = ''

  isChecked!: boolean;
  writeValue(isChecked: boolean) {
    this.isChecked = isChecked;
  }

  onChange: any = () => { };
  onTouch: any = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  constructor() {
    this.id = `checkbox-${integer}`
    integer++
  }

  ngOnInit() {
    this.isChecked = this.control?.value
  }

  onModelChange(e: boolean) {
    this.isChecked = e;
    this.onChange(e);
    this.control?.setValue(e)
  }
}
