import { Component } from '@angular/core';

@Component({
  selector: 'my-form-datepicker',
  styles: [],
  templateUrl: './datepicker.component.html'
})

export class FormDatepickerComponent {
	selectedValue;

	foods = [
		{value: 'steak-0', viewValue: 'Steak'},
		{value: 'pizza-1', viewValue: 'Pizza'},
		{value: 'tacos-2', viewValue: 'Tacos'}
	];
}
