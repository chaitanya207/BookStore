import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router:Router,
    private _snackBar: MatSnackBar
    ) { }

  users:any =[];

  ngOnInit(): void {
  }

  backToLogin(){
    this.router.navigateByUrl('login');
  }

  createUser(name:any,password:any){
      let obj = {name,password}
      this.users.push(obj);
      localStorage.setItem('users',JSON.stringify(this.users));
      this._snackBar.open(`new user created ${name}`);
      setTimeout(() => {
        this._snackBar.dismiss();
        this.router.navigateByUrl('login');
      },1000)
  }

}
