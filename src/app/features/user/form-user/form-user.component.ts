import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

formUser=new FormGroup({
userName:new FormControl('',[Validators.required, Validators.minLength(3)]),
password:new FormControl('',[Validators.required, Validators.minLength(3)]),
  email:new FormControl('',[Validators.required, Validators.email]),
  telphone:new FormControl('',[Validators.required, Validators.pattern('^[0-9]+$')]),
  cin:new FormControl('',[Validators.required, Validators.pattern('^[0-9]+$')]),
})

f(){
  return this.formUser.get;
}

}

