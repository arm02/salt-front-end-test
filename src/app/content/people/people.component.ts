import { Component,IterableDiffers, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignInComponent } from '../../auth/signin/signin.component';
import { UploadPeopleComponent } from './upload-people/upload-people.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'people-component',
  templateUrl: './people.component.html',
  styleUrls: [ './people.component.css' ]
})
export class PeopleComponent  {
  currentUser = null;
  differ: any;
  constructor(public dialog: MatDialog,
    private userService: UserService,
    differs: IterableDiffers) {
      this.differ = differs.find([]).create(null);
      this.userService.getRefresh().subscribe((value: any) => {
        if (value) {
          this.currentUser = value;
        }
      });
  }

  ngDoCheck() {
    const change = this.differ.diff([this.currentUser]);
    if (change) {
      this.userService.getRefresh().subscribe((value: any) => {
        if (value) {
          this.currentUser = value;
        }
      });
    }
  }
  
  uploadWork() {
    if(this.currentUser == null){
      const dialogRef = this.dialog.open(SignInComponent,{
        width: "600px",
        data: null,
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });
    }else{
      const dialogRef = this.dialog.open(UploadPeopleComponent,{
        width: "600px",
        data: null,
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });
    }
  }
}
