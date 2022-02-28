import { Component, VERSION } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NetworkService } from '../../../services/network.service';
import { NetworkData } from '../../../models/network-data';

@Component({
  selector: 'all-people-component',
  templateUrl: './all-people.component.html',
  styleUrls: [ './all-people.component.css' ]
})
export class AllPeopleComponent  {
  currentUser = null;
  query: string;

  peoples: NetworkData[]=[]
  constructor(public dialog: MatDialog,
    private networkService: NetworkService) {
      this.loadAllPeople()
  }

  loadAllPeople(){
    this.networkService.getAllNetwork(this.query, 'PEOPLE').subscribe(
      data => {
        this.peoples = data.object
      }, error => {
        console.log(error)
      }
    )
  }
}
