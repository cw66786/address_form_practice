import { Component, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface formInterface {
   name: string;
   address: string;
   zipcode: string;
   state: string;
   country: string;
   phone: string;
   email: string;

 }


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Output()
  formInfo!: formInterface;

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

  formSubmit(){
   
     this.formInfo = {
      name: this.addressForm.get('name')?.value,
      address: this.addressForm.get('address')?.value,
      zipcode: this.addressForm.get('zipcode')?.value,
      state: this.addressForm.get('state')?.value,
      country: this.addressForm.get('country')?.value,
      phone: this.addressForm.get('phone')?.value,
      email: this.addressForm.get('email')?.value,
     }
   
  }
}
