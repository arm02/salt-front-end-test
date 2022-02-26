import { Component, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignInComponent } from '../../auth/signin/signin.component';
import { UploadVideosComponent } from './upload-videos/upload-videos.component';

@Component({
  selector: 'videos-component',
  templateUrl: './videos.component.html',
  styleUrls: [ './videos.component.css' ]
})
export class VideosComponent  {
  currentUser = null;
  constructor(public dialog: MatDialog) {
    this.currentUser = "T"
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
