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

  cvList: Cv[];
  currentCv: Cv
  saved: boolean = false;
  error: string;

  constructor(private auth: AuthService, private api: BackendAPIService) {
    this.api.getAllCvs().then(res => {
      this.cvList = res;
      if (this.cvList.length == 0) {
        this.currentCv = new Cv('');
      }
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
    if (this.cvList.length == 0) {
      this.api.newCv(this.currentCv.markdown)
        .then((res) => {
          this.saved = true;
        }).catch((err) => {
          console.error(err);
        });
    } else {
      this.api.updateCv(this.currentCv)
      .then((res) => {
        console.log('Successfully updated');
        this.saved = true;
      }).catch((err) => {
        this.error = err
        console.error(err)
      });
    }
  }
}
