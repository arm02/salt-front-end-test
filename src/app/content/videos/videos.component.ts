import { Component,IterableDiffers, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignInComponent } from '../../auth/signin/signin.component';
import { UploadVideosComponent } from './upload-videos/upload-videos.component';
import { UserService } from '../../services/user.service';
import { NetworkService } from '../../services/network.service';

@Component({
  selector: 'videos-component',
  templateUrl: './videos.component.html',
  styleUrls: [ './videos.component.css' ]
})
export class VideosComponent  {
  currentUser = null;
  query: string;
  differ: any;
  constructor(public dialog: MatDialog,
    private userService: UserService,
    private networkService: NetworkService,
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

  loadHomeVideos(){
    this.networkService.getHomeNetwork(this.query, 'VIDEO').subscribe(
      data => {
        
      }, error => {
        console.log(error)
      }
    )
  }

  uploadVideos() {
    if(this.currentUser == null){
      const dialogRef = this.dialog.open(SignInComponent,{
        width: "600px",
        data: null,
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });
    }else{
      const dialogRef = this.dialog.open(UploadVideosComponent,{
        width: "600px",
        data: null,
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });
    }
  }
}
