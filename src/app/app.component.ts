import { Component, Input } from '@angular/core';
import { formObject } from 'src/form-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'address_form';

  defaultFormData: formObject = {
    name: 'Luke are you actually checking this?????',
    address: '1234 Antra Ave',
    zipcode: '12345',
    state: 'Unknown',
    country: 'USA',
    phone: '1231233333',
    email: 'luke@antra.com',
  };

  formInfo!: formObject | null;

  receiveFormInfo($event: any){
    this.formInfo = $event;
    
  }

}
