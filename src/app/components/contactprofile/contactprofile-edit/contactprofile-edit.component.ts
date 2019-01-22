import { Component, OnInit } from '@angular/core';
import { ContactProfile } from 'src/app/models/ContactProfile';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ContactProfileService } from 'src/app/services/contactprofile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contactprofile-edit',
  templateUrl: './contactprofile-edit.component.html',
  styleUrls: ['./contactprofile-edit.component.css']
})
export class ContactProfileEditComponent implements OnInit {

  contact: ContactProfile;

  editContactForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _contactProfileService: ContactProfileService,
              private _ar: ActivatedRoute,
              private _authService: AuthService,
              private _router: Router) { 

        this._ar.paramMap.subscribe(p => {
          this._contactProfileService.getContactProfile(this._authService.currentUser()).subscribe((singleContact: ContactProfile) => {
            this.contact = singleContact;
            this.createForm();
          })
        })
              }

  ngOnInit() {
  }
  createForm(){
    this.editContactForm = this._form.group({
      ContactEntityId: new FormControl(this.contact.contactEntityId),
      FirstName: new FormControl(this.contact.firstName),
      LastName: new FormControl(this.contact.lastName),
      CompanyName: new FormControl(this.contact.companyName),
      Email: new FormControl(this.contact.email),
      Phone: new FormControl(this.contact.phone),
      StreetAddress: new FormControl(this.contact.streetAddress),
      City: new FormControl(this.contact.city),
      State: new FormControl(this.contact.state),
      Zip: new FormControl(this.contact.zip),
    })
  }

  onSubmit(form) {
    const updateContact: ContactProfile = {
      contactEntityId: form.value.ContactEntityId,
      firstName: form.value.FirstName,
      lastName: form.value.LastName,
      companyName: form.value.CompanyName,
      email: form.value.Email,
      phone: form.value.Phone,
      streetAddress: form.value.StreetAddress,
      city: form.value.City,
      state: form.value.State,
      zip: form.value.Zip
    }
    this._contactProfileService.updateContact(updateContact).subscribe(d => {
      this._router.navigate(['/contact']);
    })
  }
}