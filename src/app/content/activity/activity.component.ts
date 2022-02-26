import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'activity-component',
  templateUrl: './activity.component.html',
  styleUrls: [ './activity.component.css' ]
})
export class ActivityComponent  {
  name = 'Angular ' + VERSION.major;
}
