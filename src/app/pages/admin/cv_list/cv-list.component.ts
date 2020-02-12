import { Component, OnInit } from '@angular/core';
import { BackendAPIService } from 'src/app/services/backendAPI/backend-api.service';
import { Cv } from 'src/app/models/index';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})
export class CvListComponent implements OnInit {
  data: Cv;

  constructor(private api: BackendAPIService) { }

  ngOnInit(): void {
    this.getCvs();
  }

  getCvs() {
    this.api.getAllCvs().subscribe((data: Cv) => {
      console.log(data);
    })
  }

}
