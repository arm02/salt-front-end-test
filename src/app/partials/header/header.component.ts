import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../../auth/signin/signin.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    console.log("asu")
    const dialogRef = this.dialog.open(SignInComponent, {
      width: "1000px",
      data: null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
