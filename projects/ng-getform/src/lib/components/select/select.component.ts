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
  @Input() options: string[] = [];
  @Output() selectionChange = new EventEmitter<string>();
  isActive: boolean = false;
  searchString = new FormControl('');
  filteredOptions: string[] = []

  @HostListener('window:click', ['$event.target'])
  closeDropdownOnMissClick(event: HTMLElement) {
    if (!event.classList.contains('select-wrapper')) this.isActive = false;
  }

  changeValue(value: any) {
    this.selectTitle = value;
    this.selectionChange.emit(value);
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
