import { Component, IterableDiffers, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignInComponent } from '../../auth/signin/signin.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentUser = null;
  differ: any;
  constructor(public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute,
    private userService: UserService,
    differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
    this.userService.getRefresh().subscribe((value: any) => {
      if (value) {
        this.currentUser = value
      }
    })
  }

  ngDoCheck() {
    const change = this.differ.diff([this.currentUser]);
    if (change) {
      this.userService.getRefresh().subscribe((value: any) => {
        if (value) {
          this.currentUser = value
        }
      })
    }
  }

  accountOpen() {
    if(this.currentUser == null){
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

  logout() {  
    localStorage.removeItem('currentUser');
    localStorage.removeItem('jwt');
    window.location.reload()
  }

  uploadFile(){
    if(this.currentUser == null){
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
  
}
