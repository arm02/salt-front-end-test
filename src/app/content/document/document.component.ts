import { Component,IterableDiffers, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignInComponent } from '../../auth/signin/signin.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { UserService } from '../../services/user.service';
import { NetworkService } from '../../services/network.service';
import { Network } from '../../models/network';
import { Subscription } from 'rxjs';

@Component({
  selector: 'document-component',
  templateUrl: './document.component.html',
  styleUrls: [ './document.component.css' ]
})
export class DocumentComponent  {
  currentUser = null;
  query: string;
  differ: any;

  network = new Network
  private subscriptionName: Subscription;
  constructor(public dialog: MatDialog,
    private userService: UserService,
    private networkService: NetworkService,
    differs: IterableDiffers) {
      this.loadFromUpload()
      this.loadHomeDocument()
      this.differ = differs.find([]).create(null);
      this.userService.getRefresh().subscribe((value: any) => {
        if (value) {
          this.currentUser = value;
          if(this.currentUser){
          }
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

  loadFromUpload(){
    this.subscriptionName= this.networkService.getUpdate().subscribe
    (message => { 
      this.loadHomeDocument()
    });
  }

  loadHomeDocument(){
    this.networkService.getHomeNetwork(this.query, 'DOCUMENT').subscribe(
      data => {
        this.network = data
      }, error => {
        console.log(error)
      }
    )
  }
  
  uploadDocument() {
    if(this.currentUser == null){
      const dialogRef = this.dialog.open(SignInComponent,{
        width: "600px",
        data: null,
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });
    }else{
      const dialogRef = this.dialog.open(UploadDocumentComponent,{
        width: "600px",
        data: null,
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.loadHomeDocument()
        }
      });
    }
  }
}
