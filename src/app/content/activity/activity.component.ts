import { Component, VERSION } from '@angular/core';
import { NetworkService } from '../../services/network.service';
import { Activity } from '../../models/activity';

@Component({
  selector: 'activity-component',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent {
  query: string;
  activitys: Activity[] = [];
  constructor(private networkService: NetworkService) {
    this.loadAllActivity();
  }

  loadAllActivity() {
    this.networkService.getAllActivity(this.query).subscribe(
      (data) => {
        this.activitys = data.object;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
 timeSince(date) {
    var dateFix: any = new Date(date).valueOf()
    var seconds = Math.floor((new Date().valueOf() - dateFix) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
}
