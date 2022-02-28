import { Component, EventEmitter, HostListener, Input, Output, VERSION } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NetworkService } from '../../services/network.service';
import { NetworkData } from '../../models/network-data';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query: string;

  networks: NetworkData[]=[]
  constructor(private route: ActivatedRoute,
    private networkService: NetworkService){
      tloadAllNetwork()
  }

  loadAllNetwork(){
    this.networkService.getAllNetwork(this.route.snapshot.queryParams['query'], null).subscribe(
      data => {
        this.networks = data.object
        console.log(this.networks)
      }, error => {
        console.log(error)
      }
    )
  }
}

