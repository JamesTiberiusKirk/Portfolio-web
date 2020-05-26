import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  wrongPass: boolean;
  emptyCreds: boolean;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  onBtnLoginClick() {
    if ((!this.loginForm.value.username) || (!this.loginForm.value.password)){
      this.emptyCreds = true;
      return;
    }
    this.auth.login(this.loginForm.value.username,this.loginForm.value.password)
    .subscribe((res)=>{
      this.router.navigate(['/admin']);
    },err=>{
      this.wrongPass = true;
      this.emptyCreds = false;
    });
  }

}
