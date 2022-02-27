import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'upload-content-component',
  templateUrl: './upload-content.component.html',
  styleUrls: [ './upload-content.component.css' ]
})
export class UploadContentComponent  {
  name = 'Angular ' + VERSION.major;
}
