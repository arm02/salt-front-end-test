import { Component, IterableDiffers, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../../auth/signin/signin.component';
import { UploadContentComponent } from '../../content/upload-content.component';
import { UserService } from '../../services/user.service';
import { NetworkService } from '../../services/network.service';
import { Network } from '../../models/network';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentUser = null;
  differ: any;
  constructor(private router: ActivatedRoute,
    public dialog: MatDialog,
    private userService: UserService,
    private networkService: NetworkService,
    differs: IterableDiffers
  ) {
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

  accountOpen() {
    if (this.currentUser == null) {
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

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('jwt');
    window.location.reload();
  }

  uploadFile() {
    if (this.currentUser == null) {
      const dialogRef = this.dialog.open(SignInComponent, {
        width: '600px',
        data: null,
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }else{
      const dialogRef = this.dialog.open(UploadContentComponent, {
        width: '600px',
        data: null,
        disableClose: true,
      });
      
      dialogRef.afterClosed().subscribe((result) => {
        this.sendMessage()
      });
    }
  }

  sendMessage(): void {
    this.networkService.sendUpdate();
  }
}
