import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName } from '@angular/forms';
import { ContactProfileService } from 'src/app/services/contactprofile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  private _contactForm: FormGroup;

  constructor(private _form: FormBuilder, private _contactProfileService: ContactProfileService, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm() {
    this._contactForm = this._form.group({
      firstName: new FormControl,
      lastName: new FormControl,
      companyName: new FormControl,
      email: new FormControl,
      phone: new FormControl,
      streetAddress: new FormControl,
      city: new FormControl,
      state: new FormControl,
      zip: new FormControl
    });
  }

  onSubmit() {
    this._contactProfileService.createContactInfo(this._contactForm.value).subscribe(data => {
      this._router.navigate(['/contact']);
  })
  }
}
