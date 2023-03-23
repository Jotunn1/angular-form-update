import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { NgGetFormProps } from 'ng-getform/lib/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  callback() {
    console.log('hello from callback');
  }

  checkboxLabel1 = 'checkbox 1';
  checkboxState1 = new FormControl(true);
  checkboxLabel2 = 'checkbox 2';
  checkboxState2 = new FormControl(false);
  checkboxLabel3 = 'checkbox 3';
  checkboxState3 = new FormControl(true);

  fruitsArr: string[] = ['Banana',
    'Mango',
    'Pear',
    'Apple',
    'Orange'
  ];
  favouriteFruit: FormControl = new FormControl();

  selectedItem: FormControl = new FormControl();
  testArrRadio: any = [{ name: 'radio 1', value: 'radio 1' },
  { name: 'radio 2', value: 'radio 2' },
  { name: 'radio 3', value: 'radio 3' },
  { name: 'radio 4', value: 'radio 4 ' },]

  filesControl: FormControl = new FormControl()

  fieldList: any = [
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
    // {
    //   type: 'text',
    //   name: 'lastName',
    //   label: 'Your last name',
    //   validations: [
    //     {
    //       type: 'required',
    //       value: true,
    //       errorMessage: 'Required field',
    //     },
    //     {
    //       type: 'minLength',
    //       value: 2,
    //       errorMessage: 'At least 2 characters',
    //     },
    //     {
    //       type: 'pattern',
    //       value: '[a-zA-Z]+',
    //       errorMessage: 'Only letters',
    //     },
    //   ],
    // },
    {
      type: 'radio',
      orientation: 'vertical',
      label: 'Choose your favourite sport',
      name: 'radio',
      options: [{ name: 'soccer', value: 'soccer' },
      { name: 'baseball', value: 'baseball' },
      { name: 'hockey', value: 'hockey' },
      { name: 'tenis', value: 'tenis' },
      { name: 'basketball', value: 'basketball' },
      { name: 'formula-1', value: 'formula 1' }],
      validations: [
        {
          type: 'required',
          value: true,
          errorMessage: 'Selection required',
        },
      ],
    },
    {
      type: 'file',
      name: 'avatar'
    },
    {
      type: 'checkbox',
      label: 'Are you sure about that?',
      name: 'confirmation',
      validations: [
        {
          type: 'requiredTrue',
          value: true,
          errorMessage: 'Confirmation required',
        },
      ],
    },
    // {
    //   type: 'select',
    //   question: 'Choose your favourite fruit',
    //   name: 'fruit',
    //   options: ['Banana',
    //     'Mango',
    //     'Pear',
    //     'Apple',
    //     'Orange',
    //     'Lemon',
    //     'Watermelon'
    //   ],
    //   validations: [
    //     {
    //       type: 'required',
    //       value: true,
    //       errorMessage: 'Selection required',
    //     },
    //   ],
    // },
    // {
    //   type: 'email',
    //   name: 'email',
    //   label: 'Your email address',
    //   placeholder: 'Email address',
    //   validations: [
    //     {
    //       type: 'required',
    //       value: true,
    //       errorMessage: 'Required field',
    //     },
    //     {
    //       type: 'email',
    //       value: true,
    //       errorMessage: 'Invalid value',
    //     },
    //   ],
    // },
    // {
    //   isMultiLine: true,
    //   name: 'message',
    //   label: 'Your comment',
    //   validations: [
    //     {
    //       type: 'required',
    //       value: true,
    //       errorMessage: 'Required field',
    //     },
    //   ],
    // },
    // {
    //   type: 'password',
    //   name: 'password',
    //   label: 'Your password',
    //   placeholder: 'Password',
    //   validations: [
    //     {
    //       type: 'required',
    //       value: true,
    //       errorMessage: 'Required field',
    //     },
    //     {
    //       type: 'minLength',
    //       value: 8,
    //       errorMessage: 'This password too short',
    //     },
    //     {
    //       type: 'maxLength',
    //       value: 20,
    //       errorMessage: 'This password too long',
    //     },
    //   ],
    // },
    // {
    //   type: 'number',
    //   name: 'age',
    //   label: 'Your age',
    // },
  ];
}
