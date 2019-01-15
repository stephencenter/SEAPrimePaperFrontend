import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private _registerForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this._registerForm = this._form.group({
      email: new FormControl,
      userName: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit() {
    console.log(this._registerForm.value);
    this._authService
      .register(this._registerForm.value)
      .subscribe(() => {

        this._authService.login(this._registerForm.value)
        this._router.navigate(["/contactInfo"])
      });
  }

}
