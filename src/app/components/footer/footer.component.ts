import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  authed: any;

  constructor(public authService: AuthService) {
    if (localStorage.getItem('id_token') !== null) {
      this.authed = true;
    }
    else {
    this.authed = false;
    }
  }

  ngOnInit() {
  }

}
