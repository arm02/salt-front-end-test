import { Component, VERSION } from '@angular/core';
import { NetworkService } from '../../services/network.service';
import { Activity } from '../../models/activity';
import { Subscription } from 'rxjs';

@Component({
  selector: 'activity-component',
  templateUrl: './activity.component.html',
  styleUrls: [ './activity.component.css' ]
})
export class ActivityComponent  {
  query: string;
  activitys: Activity[]=[]
  constructor(private networkService: NetworkService) {
      this.loadAllActivity()
  }

  loadAllActivity(){
    this.networkService.getAllActivity(this.query).subscribe(
      data => {
        this.activitys = data
      }, error => {
        console.log(error)
      }
    )
  }
}
