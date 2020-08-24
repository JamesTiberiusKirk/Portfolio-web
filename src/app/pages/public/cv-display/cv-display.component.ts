import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/models';
import { BackendAPIService } from 'src/app/services/backendAPI/backend-api.service';

@Component({
  selector: 'app-cv-display',
  templateUrl: './cv-display.component.html',
  styleUrls: ['./cv-display.component.scss']
})
export class CvDisplayComponent implements OnInit {
  cv: Cv
  constructor(private api: BackendAPIService) {
    api.getCv()
    .then((data) => {
      this.cv = data;
      if (!data){
        this.cv = new Cv('# No CVs available');
      }
    }).catch((err) => {
      console.error(err)
    })
  }

  ngOnInit(): void {
  }

}
