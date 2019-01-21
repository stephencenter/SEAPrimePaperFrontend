import { Component, OnInit } from '@angular/core';
import { ContactProfileService } from 'src/app/services/contactprofile.service';
import { ContactProfile } from 'src/app/models/ContactProfile';
import { MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contactprofile-index',
  templateUrl: './contactprofile-index.component.html',
  styleUrls: ['./contactprofile-index.component.css']
})

export class ContactProfileIndexComponent implements OnInit {
    dataSource: ContactProfile;  
  
  constructor(private _contactProfileService: ContactProfileService, private _authService: AuthService) { }

  ngOnInit() {
    // console.log("ngOnInit")
    this._contactProfileService.getContactProfile(this._authService.currentUser()).subscribe((contact: ContactProfile) => {
      this.dataSource = contact;
      console.log(this.dataSource)
      console.log("Contact", contact);
    });
  }
}