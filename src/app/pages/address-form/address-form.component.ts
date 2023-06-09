import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { formObject } from 'src/form-object';




@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Input() 
  existingFormData!: formObject;
  
  @Output()
  sendFormInfo = new EventEmitter<formObject>();

  countries: string[] = [' Indian', 'England', 'Singapore','USA'];
  addressForm!: FormGroup;
  formInfo!: formObject;
 
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


    
      this.addressForm.setValue({
        name: this.existingFormData.name,
        address: this.existingFormData.address,
        zipcode: this.existingFormData.zipcode,
        state: this.existingFormData.state,
        countries: this.existingFormData.country,
        phone: this.existingFormData.phone,
        email: this.existingFormData.email
        
      })
    


  }

  formSubmit(){
   
     this.formInfo = {
      name: this.addressForm.get('name')?.value,
      address: this.addressForm.get('address')?.value,
      zipcode: this.addressForm.get('zipcode')?.value,
      state: this.addressForm.get('state')?.value,
      country: this.addressForm.get('countries')?.value,
      phone: this.addressForm.get('phone')?.value,
      email: this.addressForm.get('email')?.value,
     };

     this.sendFormInfo.emit(this.formInfo);
   
  }
}
