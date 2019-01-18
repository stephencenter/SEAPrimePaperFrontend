import { Component, OnInit } from '@angular/core';
import { ContactProfileService } from 'src/app/services/contactprofile.service';
import { ContactProfile } from 'src/app/models/ContactProfile';
import { MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-contactprofile-index',
  templateUrl: './contactprofile-index.component.html',
  styleUrls: ['./contactprofile-index.component.css']
})
export class ContactProfileIndexComponent implements OnInit {
  columnNames = ['FirstName', 'LastName' ];
  dataSource: MatTableDataSource<ContactProfile>
  userId: string
  token: any
  decodedToken: any

  constructor(private _contactProfileServices: ContactProfileService) { }

  ngOnInit() {
    this.token=localStorage.getItem('id_token')
    this.userId=this.decodedToken.nameid
    this._contactProfileServices.getContactProfile(this.userId).subscribe((contactProfile: ContactProfile[]) => {
      this.dataSource = new MatTableDataSource<ContactProfile>(contactProfile);
      console.log(this.dataSource)
    });
  }

}

// import { Component, OnInit } from '@angular/core';
// import { ContactProfileService } from 'src/app/services/contactprofile.service';
// import { ContactProfile } from 'src/app/models/ContactProfile';
// import { MatTableDataSource } from '@angular/material';

// @Component({
//   selector: 'app-contactprofile-index',
//   templateUrl: './contactprofile-index.component.html',
//   styleUrls: ['./contactprofile-index.component.css']
// })
// export class ContactProfileIndexComponent implements OnInit {
//   columnNames = ['FirstName', 'LastName' ]
//   dataSource: MatTableDataSource<ContactProfile>

//   constructor(private _contactProfileService: ContactProfileService) { }

//   ngOnInit() {
//     this._contactProfileService.getContact().subscribe((contactProfile: ContactProfile[]) => {
//       this.dataSource = new MatTableDataSource<ContactProfile>(contactProfile);
//     });
//   }
// }
