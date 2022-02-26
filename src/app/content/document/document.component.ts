import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'document-component',
  templateUrl: './document.component.html',
  styleUrls: [ './document.component.css' ]
})
export class DocumentComponent  {
  name = 'Angular ' + VERSION.major;
}
