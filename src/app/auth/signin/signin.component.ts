import { Component, VERSION, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { SignUpComponent } from '../signup/signup.component';

@Component({
  selector: 'signin-component',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent {
  username = new FormControl('');
  password = new FormControl('');

  messageError;
  messageLoading = 'Submit';

  isLoading = false;
  @ViewChild('signinForm') form: NgForm;
  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    public dialogRef: MatDialogRef<SignInComponent>
  ) {}

  submit() {
    window.location.reload();
  }

  onSubmitSignIn() {
    this.isLoading = true;
    this.messageLoading = 'Checking Data ...';
    this.userService.login(this.username.value, this.password.value).subscribe(
      (data) => {
          this.isLoading = false;
          localStorage.setItem('jwt', data.object.token);
          localStorage.setItem('role', data.object.roles);
          this.loadProfil(data.object);
          this.messageLoading = 'Submit';
      },
      (error) => {
        this.isLoading = false;
        this.messageError = error;
        this.messageLoading = 'Submit';
      }
    );
  }

  loadProfil(value) {
    this.userService.setRefresh(value);
    this.dialogRef.close(true);
  }

  createAccount() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '600px',
      data: null,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
