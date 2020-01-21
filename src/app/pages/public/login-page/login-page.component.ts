import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  onBtnLoginClick() {
    console.log(this.loginForm.value.username + ' | ' + this.loginForm.value.password);
    this.auth.login(this.loginForm.value.username,this.loginForm.value.password);
  }

}
