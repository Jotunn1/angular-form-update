import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  callback() {
    console.log('hello from callback');
  }
  testArr = [{ label: 'checkbox 1', state: false },
  { label: 'checkbox 2', state: true },
  { label: 'checkbox 3', state: false }];
  fruitsArr: string[] = ['Banana',
    'Mango',
    'Pear',
    'Apple',
    'Orange'
  ];

  favouriteFruit: string = '';
  setStateFromSelect(event: string) {
    this.favouriteFruit = event
  }

  fieldList = [
    {
      type: 'text',
      name: 'name',
      label: 'Your first name',
      validations: [
        {
          type: 'required',
          value: true,
          errorMessage: 'Required field',
        },
        {
          type: 'minLength',
          value: 2,
          errorMessage: 'At least 2 characters',
        },
        {
          type: 'pattern',
          value: '[a-zA-Z]+',
          errorMessage: 'Only letters',
        },
      ],
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Your last name',
      validations: [
        {
          type: 'required',
          value: true,
          errorMessage: 'Required field',
        },
        {
          type: 'minLength',
          value: 2,
          errorMessage: 'At least 2 characters',
        },
        {
          type: 'pattern',
          value: '[a-zA-Z]+',
          errorMessage: 'Only letters',
        },
      ],
    },
    {
      type: 'email',
      name: 'email',
      label: 'Your email address',
      placeholder: 'Email address',
      validations: [
        {
          type: 'required',
          value: true,
          errorMessage: 'Required field',
        },
        {
          type: 'email',
          value: true,
          errorMessage: 'Invalid value',
        },
      ],
    },
    {
      isMultiLine: true,
      name: 'message',
      label: 'Your comment',
      validations: [
        {
          type: 'required',
          value: true,
          errorMessage: 'Required field',
        },
      ],
    },
    {
      type: 'password',
      name: 'password',
      label: 'Your password',
      placeholder: 'Password',
      validations: [
        {
          type: 'required',
          value: true,
          errorMessage: 'Required field',
        },
        {
          type: 'minLength',
          value: 8,
          errorMessage: 'This password too short',
        },
        {
          type: 'maxLength',
          value: 20,
          errorMessage: 'This password too long',
        },
      ],
    },
    {
      type: 'number',
      name: 'age',
      label: 'Your age',
    },
  ];
}
