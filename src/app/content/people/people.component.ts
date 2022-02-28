import { Component,IterableDiffers, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignInComponent } from '../../auth/signin/signin.component';
import { UploadPeopleComponent } from './upload-people/upload-people.component';
import { UserService } from '../../services/user.service';
import { NetworkService } from '../../services/network.service';
import { Network } from '../../models/network';

@Component({
  selector: 'people-component',
  templateUrl: './people.component.html',
  styleUrls: [ './people.component.css' ]
})
export class PeopleComponent  {
  currentUser = null;
  query: string;
  differ: any;

  network = new Network
  constructor(public dialog: MatDialog,
    private userService: UserService,
    private networkService: NetworkService,
    differs: IterableDiffers) {
      this.loadHomePeople()
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

  loadHomePeople(){
    this.networkService.getHomeNetwork(this.query, 'PEOPLE').subscribe(
      data => {
        this.network = data
      }, error => {
        console.log(error)
      }
    )
  }
  
  uploadWork() {
    if(this.currentUser == null){
      const dialogRef = this.dialog.open(SignInComponent,{
        width: "600px",
        data: null,
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => { 
        this.userService.getRefresh().subscribe((value: any) => {
          if (value) {
            this.currentUser = value;
          }
        });
      });
    }else{
      const dialogRef = this.dialog.open(UploadPeopleComponent,{
        width: "600px",
        data: null,
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.loadHomePeople()
        }
      });
    }
  }
}
