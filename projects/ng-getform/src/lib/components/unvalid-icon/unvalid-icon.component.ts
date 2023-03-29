import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-unvalid-icon',
  templateUrl: './unvalid-icon.component.html',
  styleUrls: ['./unvalid-icon.component.scss']
})
export class UnvalidIconComponent implements OnInit {
  @Input() errorMessages!: any;
  @Input() errors!: any;

  ngOnInit() {
    console.log(this.errors)
  }
}
