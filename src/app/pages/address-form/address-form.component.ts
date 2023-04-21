import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

// interface Country {
//   value: string;
//   viewValue: string;
// }


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  countries: string[] = [' Indian', 'England', 'Singapore','USA'];
  addressForm!: FormGroup;
 
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.addressForm = this.fb.group({
      name: new FormControl('', [Validators.required]),

      address: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      countries: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

}
