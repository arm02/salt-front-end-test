import { Component, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'all-videos-component',
  templateUrl: './all-videos.component.html',
  styleUrls: [ './all-videos.component.css' ]
})
export class AllVideosComponent  {
  currentUser = null;
  constructor(public dialog: MatDialog) {
    this.currentUser = "T"
  }
}
