# @halo-lab/ng-getform

### To install package

```sh
npm install @halo-lab/ng-getform
```

### To use the components

You can import separate component from library or use Form component

```sh
import { NgGetform } from '@halo-lab/ng-getform';

 or

import { Checkbox, Select, RadioGroup } from '@halo-lab/ng-getform';

```

- add imported component to imports in your component

```sh
  imports: [ NgGetForm, Checkbox, Select, RadioGroup]

```

- use component in template

```sh
<lib-ng-getform></lib-ng-getform>

or

<lib-select></lib-select>

<lib-checkbox></lib-checkbox>

<lib-radio-group></lib-radio-group>

```

### Checkbox accepts parameters

- required `name : string` the name of an checkbox field;
- required `label : string` the label of an checkbox;
- required `control : FormControl` - variable to control checkbox value (new FormControl(yourValue : boolean)).

#### Example of usage

in your .html file

```sh
  <lib-checkbox
    [name]="'confirmation'"
    [label]="'Are you sure about that?'"
    [control]="confirmationState"
  ></lib-checkbox>
```

in your .ts file

```sh
confirmationState = new FormControl(false);
```

## RadioGroup accepts parameters

- required `name : string` the name of an radio group input;
- required `label : string` the label of an radio group;
- required `items : [{name:string,value:string}]` the label of an radio group;
- required `control : FormControl` - variable to control radio group value (new FormControl(yourValue : string));
- optional `orientation? : (vertical | horizontal )` property that allow you to control buttons group orientation. Default value : vertical.

#### Example of usage

in your .html file

```sh
  <lib-radio-group
    [items]="radioButtonsArray"
    [orientation]="'horizontal'"
    [label]="'Choose one option'"
    [control]="selectedRadioItem"
  ></lib-radio-group>
```

in your .ts file

```sh
selectedRadioItem: FormControl = new FormControl();
radioButtonsArray: { name: string, value: string }[] =
  [{ name: 'radio 1', value: 'radio-1' },
  { name: 'radio 2', value: 'radio-2' },
  { name: 'radio 3', value: 'radio-3' },
  { name: 'radio 4', value: 'radio-4 ' }]
```

## Select accepts parameters

- required `question : string` question before select component;
- required `options : string[]` array of options;
- required `control : FormControl` - variable to control select value (new FormControl(yourValue : string));
- optional `selectTitle : string` you can define preselected title
- optional `searchEnabled : boolean` enable/disable search bar for select options.

#### Example of usage

in your .html file

```sh
  <lib-select
    [question]="'Choose your favourite fruit'"
    [options]="fruitsArr"
    [control]="favouriteFruit"
    [searchEnabled]="false"
  ></lib-select>
```

in your .ts file

```sh
favouriteFruit: FormControl = new FormControl();
fruitsArr: string[] = ['Banana',
  'Mango',
  'Pear',
  'Apple',
  'Orange'
];
```

### NgGetform accepts parameters

- required `targetUrl` (the url of your form on getform);
- required `fields` (list of fields that must be in the form);
- optional `btnLabel` - label on the button (default "Send form");
- optional `successCallback` - function that will be called after successful submission of the form data on getform.io.

### Parameters types

- `targetUrl`: `string`
- `fields`: `array`

```sh
    name: string
    type?: string (default 'text')
    label?: string
    placeholder?: string (default equal 'label')
    isMultiLine?: boolean (if true, will be rendered '<textarea></textarea>', otherwise a '<input />')
    validation?: {
        errorMessage: string
        type: string (allowed 'required' | 'email' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern')
        value: string | number | boolean
    }[]
```

- `btnLabel`: `string`
- `successCallback`: `() => void`

### 'fields' parameter examples

```sh
  {
    name: string
    type?: string (default 'text')
    label?: string
    placeholder?: string (default equal 'label')
    isMultiLine?: boolean (if true, will be rendered '<textarea></textarea>', otherwise a '<input />')
    validation?: {
        errorMessage: string
        type: string (allowed 'required' | 'email' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern')
        value: string | number | boolean
    }[]
  }
```

```sh
    {
      type: 'text',
      name: 'name',
      label: 'Your first name',
      validation: [
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
      type: 'checkbox',
      label: 'Are you sure about that?',
      name: 'confirmation',
      validation: [
        {
          type: 'requiredTrue',
          value: true,
          errorMessage: 'Confirmation required',
        },
      ],
    },
    {
      type: 'radio',
      orientation: 'vertical',
      label: 'Choose your favourite sport',
      name: 'sport',
      options: [{ name: 'soccer', value: 'soccer' },
      { name: 'hockey', value: 'hockey' },
      { name: 'tenis', value: 'tenis' },
      { name: 'basketball', value: 'basketball' },
      { name: 'formula 1', value: 'formula-1' }],
      validation: [
        {
          type: 'required',
          value: true,
          errorMessage: 'Selection required',
        },
      ],
    },
     {
      type: 'select',
      question: 'Choose your favourite fruit',
      name: 'fruit',
      options: ['Banana',
        'Mango',
        'Pear',
        'Apple',
        'Orange',
        'Lemon',
        'Watermelon'
      ],
      validation: [
        {
          type: 'required',
          value: true,
          errorMessage: 'Selection required',
        },
      ],
    },
```

## Word from author

Have fun ✌️

<a href="https://www.halo-lab.com/?utm_source=github">
  <img
    src="https://dgestran.sirv.com/Images/supported-by-halolab.png"
    alt="Supported by Halo lab"
    height="60"
  >
</a>
