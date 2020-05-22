import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BackendAPIService } from 'src/app/services/backendAPI/backend-api.service';
import { Cv } from 'src/app/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cvList: Array<Cv>
  currentCv: Cv

  constructor(private auth: AuthService, private api: BackendAPIService) {
    this.api.getAllCvs().then(res => {
      this.cvList = res;
    }).catch(err => {
      console.error(err)
    });
  }

  ngOnInit() {
  }

  logoutBtn() {
    this.auth.logout();
  }

  btnSave() {
    this.api.updateCv(this.currentCv)
      .then(res => {
        console.log("Succesfully updated");
        // console.log(res);
      }).catch(err => {
        console.error(err)
      });
  }
}
