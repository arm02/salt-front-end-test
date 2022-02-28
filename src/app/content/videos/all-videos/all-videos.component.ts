import { Component, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NetworkService } from '../../../services/network.service';
import { NetworkData } from '../../../models/network-data';

@Component({
  selector: 'all-videos-component',
  templateUrl: './all-videos.component.html',
  styleUrls: [ './all-videos.component.css' ]
})
export class AllVideosComponent  {
  currentUser = null;
  query: string;

  videos: NetworkData[]=[]
  constructor(public dialog: MatDialog,
    private networkService: NetworkService) {
      this.loadHomeVideos()
  }

  loadHomeVideos(){
    this.networkService.getAllNetwork(this.query, 'VIDEO').subscribe(
      data => {
        this.videos = data.object
      }, error => {
        console.log(error)
      }
    )
  }
}
