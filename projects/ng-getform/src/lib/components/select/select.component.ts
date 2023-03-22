import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() question?: string;
  @Input() selectTitle?: string;
  @Input() searchEnabled: boolean = true;
  @Input() options: string[] = [];
  @Input() control: FormControl = new FormControl();
  @Input() isSubmitted: boolean = false;
  @Input() errorMessages: any;
  isActive: boolean = false;
  searchString = new FormControl('');
  filteredOptions: string[] = []

  @HostListener('window:click', ['$event.target'])
  closeDropdownOnMissClick(event: HTMLElement) {
    if (!event.classList.contains('select-wrapper')) this.isActive = false;
  }

  changeValue(value: any) {
    this.selectTitle = value;
    this.control?.setValue(value)
  }

  toggleDropdown() {
    this.isActive = !this.isActive;
  }

  constructor() { }

  ngOnInit(): void {
    this.selectTitle = 'Default title';
    this.filteredOptions = [...this.options];
  }

  searchInputHandle() {
    this.filteredOptions = this.options.filter(el =>
      el.toLowerCase().includes((this.searchString.value as string).toLowerCase()));
  }

  searchClickHandle(event: Event) {
    event?.stopPropagation()
  }
}
