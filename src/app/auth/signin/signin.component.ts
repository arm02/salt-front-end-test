import { Component, VERSION, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { UserService } from '../../services/user.service';
import { SignUpComponent } from '../signup/signup.component';

@Component({
  selector: 'signin-component',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.css' ]
})
export class SignInComponent  {
  username = new FormControl('');
  password = new FormControl('');

  messageError;
  messageLoading = "MASUK";

  isLoading = false
  @ViewChild('signinForm') form: NgForm
  constructor(public dialog: MatDialog, private userService: UserService, public dialogRef: MatDialogRef<SignInComponent>) {}

  submit(){
    window.location.reload()
  }
  
  onSubmitSignIn() {
    this.isLoading = true
    this.messageLoading = "Memeriksa Data ..."
    this.userService.login(this.username.value, this.password.value).subscribe(
      data => {
        if(data.object.type == 'ADMIN'){
          this.isLoading = false
          localStorage.setItem("jwt", data.object.token)
          localStorage.setItem("role", data.object.roles)
          this.loadProfil(data.object)
          this.messageLoading = "MASUK"
        }else{
          this.isLoading = false
          this.messageError = "Maaf, Anda tidak memiliki akses ..."
          this.messageLoading = "MASUK"
        }
      },
      error => {
        this.isLoading = false
        this.messageError = error
        this.messageLoading = "MASUK"
      }
    )
  }

  loadProfil(value) {
    this.userService.setRefresh(value);
    this.dialogRef.close(true)
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
