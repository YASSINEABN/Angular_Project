import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }

  submit() {
    const formData = this.form.getRawValue();
    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: '2',
      client_secret: '5K3TU8WHkeZ2ocQqkhKuUZT4zxiuxhOoB9B7XsGI',
      scope: '*'
    };

    this.http.post('http://localhost:8000/oauth/token', data)
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.access_token);
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Authentication error:', error);
        }
      );
  }
}
