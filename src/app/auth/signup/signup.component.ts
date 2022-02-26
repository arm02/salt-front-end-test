import { Component, VERSION } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { SignInComponent } from '../signin/signin.component';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.css' ]
})
export class SignUpComponent  {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(public dialog: MatDialog) {}

  login() {
    const dialogRef = this.dialog.open(SignInComponent,{
      width: "600px",
      data: null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
