import { FormControl, Validators } from "@angular/forms";
import { TValidationItem } from "./types";

export const getErrorMessages = (validations: TValidationItem[]) => {
  const res: any = {};
  validations.forEach((item) => {
    if (item.type === 'required' || item.type === 'requiredTrue') res.required = item.errorMessage;
    if (item.type === 'minLength') res.minLength = item.errorMessage;
    if (item.type === 'min') res.min = item.errorMessage;
    if (item.type === 'maxLength') res.maxLength = item.errorMessage;
    if (item.type === 'max') res.max = item.errorMessage;
    if (item.type === 'email') res.email = item.errorMessage;
    if (item.type === 'pattern') res.pattern = item.errorMessage;
  });
  return res;
};

export const addValidatorToControl = (validations: TValidationItem[], formControl: FormControl) => {
  validations.forEach((current: TValidationItem) => {
    if (current.type === 'requiredTrue')
      formControl.setValidators(Validators.requiredTrue);
    else if (current.type === 'required')
      formControl.setValidators(Validators.required);
    else if (current.type === 'minLength')
      formControl.setValidators(Validators.minLength(Number(current.value)) || 2);
    else if (current.type === 'maxLength')
      formControl.setValidators(Validators.maxLength(Number(current.value) || 10));
    else if (current.type === 'max')
      formControl.setValidators(Validators.max(Number(current.value) || 100));
    else if (current.type === 'min')
      formControl.setValidators(Validators.min(Number(current.value) || 0));
    else if (current.type === 'email')
      formControl.setValidators(Validators.email);
    else if (current.type === 'pattern')
      formControl.setValidators(Validators.pattern(String(current.value) || '[a-zA-Z" "]+'));
  })
}
