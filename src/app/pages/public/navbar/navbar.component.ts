import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() current: string;
  isLoggedIn: boolean = false;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getCurrentUser() ? this.isLoggedIn = true : this.isLoggedIn = false
  }

  logout(){

  }
}
