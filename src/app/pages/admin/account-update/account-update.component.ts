import { Component, OnInit } from '@angular/core';
import { BackendAPIService } from 'src/app/services/backendAPI/backend-api.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent implements OnInit {

  usernameUpdate = false;
  passwordUpdate = false;

  username: string;
  password: string;
  passwordRepeat: string;

  noUsernameErr = false;
  noPasswordErr = false;
  noPasswordMatch = false;

  success = false;


  constructor(private api: BackendAPIService, private auth: AuthService) { }

  ngOnInit(): void {
  }
  

  onBtnUpdateClick() {
    let update = {};

    this.noUsernameErr = (this.usernameUpdate && !(this.username));
    this.noPasswordErr = (this.passwordUpdate && !(this.password));
    this.noPasswordMatch = (this.passwordUpdate && !(this.password === this.passwordRepeat));

    if (this.usernameUpdate && !this.noUsernameErr) {
      update['username'] = this.username;
    }

    if (this.passwordUpdate && !(this.noPasswordErr && this.noPasswordMatch)) {
      update['password'] = this.password;
    }

    this.api.updateUserDetails(this.auth.getCurrentUser().id, update)
      .then((res)=>{
        this.success = true;
        console.log(res);
      }).catch((err)=>{
        console.error(err);
      });

  }

}
