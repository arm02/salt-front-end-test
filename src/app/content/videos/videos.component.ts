import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'videos-component',
  templateUrl: './videos.component.html',
  styleUrls: [ './videos.component.css' ]
})
export class VideosComponent  {
  name = 'Angular ' + VERSION.major;
}
