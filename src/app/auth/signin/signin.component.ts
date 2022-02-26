import { Component, VERSION } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { SignUpComponent } from '../signup/signup.component';

@Component({
  selector: 'signin-component',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.css' ]
})
export class SignInComponent  {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(public dialog: MatDialog) {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  submit(){
    window.location.reload()
  }
  createAccount() {
    const dialogRef = this.dialog.open(SignUpComponent,{
      width: "600px",
      data: null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
