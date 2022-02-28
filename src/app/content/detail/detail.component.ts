import { Component, EventEmitter, HostListener, Input, Output, VERSION } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NetworkService } from '../../services/network.service';
import { NetworkData } from '../../models/network-data';

@Component({
  selector: 'detail-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {

  networkData = new NetworkData
  constructor(private route: ActivatedRoute,
    private networkService: NetworkService){
    const idNetwork: number = route.snapshot.params.id
    this.loadNetwork(idNetwork)
  }

  loadNetwork(id: number){
    this.networkService.getNetwork(id).subscribe(
      data => {
        this.networkData = data.object
        console.log(this.networkData)
      }, error => {
        console.log(error)
      }
    )
  }
}

