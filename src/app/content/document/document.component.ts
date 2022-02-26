import { Component, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignInComponent } from '../../auth/signin/signin.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';

@Component({
  selector: 'document-component',
  templateUrl: './document.component.html',
  styleUrls: [ './document.component.css' ]
})
export class DocumentComponent  {
  currentUser = null;
  constructor(public dialog: MatDialog) {
    this.currentUser = "T"
  }

  uploadDocument() {
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
      const dialogRef = this.dialog.open(UploadDocumentComponent,{
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
