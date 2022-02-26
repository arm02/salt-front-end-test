import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'upload-videos-component',
  templateUrl: './upload-videos.component.html',
  styleUrls: [ './upload-videos.component.css' ]
})
export class UploadVideosComponent  {
  name = 'Angular ' + VERSION.major;
}
