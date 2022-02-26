import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'upload-people-component',
  templateUrl: './upload-people.component.html',
  styleUrls: [ './upload-people.component.css' ]
})
export class UploadPeopleComponent  {
  name = 'Angular ' + VERSION.major;
}
