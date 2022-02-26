import { Component,IterableDiffers, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignInComponent } from '../../auth/signin/signin.component';
import { UploadVideosComponent } from './upload-videos/upload-videos.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'videos-component',
  templateUrl: './videos.component.html',
  styleUrls: [ './videos.component.css' ]
})
export class VideosComponent  {
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

  uploadVideos() {
    if(this.currentUser == null){
      const dialogRef = this.dialog.open(SignInComponent,{
        width: "600px",
        data: null,
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }else{
      const dialogRef = this.dialog.open(UploadVideosComponent,{
        width: "600px",
        data: null,
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}
