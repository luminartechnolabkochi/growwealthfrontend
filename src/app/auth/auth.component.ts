import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms"
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isActive:boolean=false;

  toggleActive(){
    console.log("hello");
    
    this.isActive=!this.isActive
  }

  signUpForm=new FormGroup({
    "username":new FormControl("",Validators.required),
    "email":new FormControl("",Validators.required),
    "password":new FormControl("",Validators.required)
  })
  
  signInForm=new FormGroup({
    "username":new FormControl("",Validators.required),
    "password":new FormControl("",Validators.required)
  })

  signUp(){

    console.log(this.signUpForm.value);    
  }
  signIn(){
    console.log(this.signInForm.value);
    
  }

}
