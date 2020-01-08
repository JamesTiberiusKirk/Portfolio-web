import { Component } from '@angular/core';
import { BackendAPIService } from './services/backendAPI/backend-api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  hello_w;

  constructor(private api: BackendAPIService){
    this.api.getTest().subscribe(data=>{
      console.log(data);
      this.hello_w = JSON.stringify(data);
    });
  }
}
