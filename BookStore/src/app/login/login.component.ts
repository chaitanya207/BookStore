import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  isLoginIsValid:boolean = false;

  login(name:any,password:any){
    let usersList:any = localStorage.getItem('users');
    usersList = JSON.parse(usersList);
    let isUserAvilable = usersList.filter((item:any) => item.name === name).length > 0;
    if(isUserAvilable){
      this._snackBar.open(`${name} is alredy used try with some other.`);
      setTimeout(() => {
        this._snackBar.dismiss();
      },1000)

    }else if(name && password){
       this._snackBar.open(`Welcome ${name}`);
       setTimeout(() => {
         this._snackBar.dismiss();
          this.router.navigateByUrl('booklist');
       },1000)
        
    }else{
      this._snackBar.open(`Please fill Required fields`);
      setTimeout(() => {
        this._snackBar.dismiss();
      },1000)
    }
  }

  getRegister(){
    debugger
      this.router.navigateByUrl('register');
  }

}
