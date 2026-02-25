import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormUserComponent } from './form-user/form-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormUserComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
