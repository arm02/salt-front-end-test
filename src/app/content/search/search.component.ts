import { Component, EventEmitter, HostListener, Input, Output, VERSION } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NetworkService } from '../../services/network.service';
import { NetworkData } from '../../models/network-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query = "";

  networks: NetworkData[]=[]
  private subscriptionName: Subscription;
  constructor(private route: ActivatedRoute,
    private networkService: NetworkService){
      this.route.queryParams.subscribe(params => {
        this.query = params['query']
        this.loadFromSearch()
        this.loadAllNetwork()
      });
  }

  loadAllNetwork(){
    this.networkService.getAllNetwork(this.query, null).subscribe(
      data => {
        this.networks = data.object
      }, error => {
        console.log(error)
      }
    )
  }

  loadFromSearch(){                    
      this.subscriptionName= this.networkService.getUpdate().subscribe
        (message => { 
          this.loadAllNetwork()
        });
  }
}

