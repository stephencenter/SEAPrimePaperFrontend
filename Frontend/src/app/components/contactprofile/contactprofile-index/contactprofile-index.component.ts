import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ContactProfile } from 'src/app/models/ContactProfile';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-contactprofile-index',
  templateUrl: './contactprofile-index.component.html',
  styleUrls: ['./contactprofile-index.component.css']
})
export class ContactprofileIndexComponent implements OnInit {
  columnNames = ['ContactName', 'details'];
  dataSource: MatTableDataSource<ContactProfile>

  constructor(private _contactProfileServices: ContactService) { }

  ngOnInit() {
    this._contactProfileServices.getContactProfile().subscribe((contactProfile: ContactProfile[]) => {
      this.dataSource = new MatTableDataSource<ContactProfile>(contactProfile);
    });
  }

}
