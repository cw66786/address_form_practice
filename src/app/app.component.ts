import { Component, Input } from '@angular/core';
import { formObject } from 'src/form-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'address_form';

  

  formInfo!: formObject | null;

  receiveFormInfo($event: any){
    this.formInfo = $event;
    
  }

}
