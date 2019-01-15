import { Component, OnInit } from '@angular/core';
import { ContactProfileService } from 'src/app/services/contactprofile.service';
import { ContactProfile } from 'src/app/models/ContactProfile';


@Component({
  selector: 'app-contactprofile-index',
  templateUrl: './contactprofile-index.component.html',
  styleUrls: ['./contactprofile-index.component.css']
})
export class ContactProfileIndexComponent implements OnInit {
  columnNames = ['FirstName', 'LastName', 'Title', 'IsStarred', 'CreatedUtc', 'buttons'];
  constructor(private _contactProfileServices: ContactProfileService) { }

  ngOnInit() {
    this._contactProfileServices.getContactProfile().subscribe((contactProfile: ContactProfile[]) => {
    });
  }

}
