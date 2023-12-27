import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMsg = '';
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  login()
  {
    if(this.username.trim().length === 0)
    {
        this.errorMsg = "Username is required";
    }
    else if(this.password.trim().length === 0)
    {
      this.errorMsg = "Password is required";
    }
    else
    {
      this.errorMsg = "";
      if(this.username == "yassine" && this.password == "yassine")
      {
       
        this.router.navigate(['home']);
      } 
      else
      this.errorMsg = "invalid credetionals";
}
}
}
