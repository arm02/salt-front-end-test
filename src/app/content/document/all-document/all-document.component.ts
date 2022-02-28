import { Component, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NetworkService } from '../../../services/network.service';
import { NetworkData } from '../../../models/network-data';

@Component({
  selector: 'all-document-component',
  templateUrl: './all-document.component.html',
  styleUrls: [ './all-document.component.css' ]
})
export class AllDocumentComponent  {
  currentUser = null;
  query: string;

  documents: NetworkData[]=[]
  constructor(public dialog: MatDialog,
    private networkService: NetworkService) {
      this.loadAllDocument()
  }

  loadAllDocument(){
    this.networkService.getAllNetwork(this.query, 'DOCUMENT').subscribe(
      data => {
        this.documents = data.object
      }, error => {
        console.log(error)
      }
    )
  }
}
