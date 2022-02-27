import { Component, VERSION, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { SignInComponent } from '../signin/signin.component';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent {
  username = new FormControl('');
  fullName = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  messageError;
  messageLoading = 'Submit';

  isLoading = false;
  @ViewChild('signinForm') form: NgForm;

  constructor(public dialog: MatDialog,
    private userService: UserService,
    public dialogRef: MatDialogRef<SignUpComponent>) {}

  onSubmitSignUp() {
    this.isLoading = true;
    this.messageLoading = 'Checking Data ...';
    this.userService.signup(this.fullName.value,this.email.value,this.username.value, this.password.value).subscribe(
      (data) => {
        this.isLoading = false;
        this.dialogRef.close(true)
        this.messageLoading = 'Submit';
        this.login()
      },
      (error) => {
        this.isLoading = false;
        this.messageError = error;
        this.messageLoading = 'Submit';
      }
    );
  }

  login() {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '600px',
      data: null,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
