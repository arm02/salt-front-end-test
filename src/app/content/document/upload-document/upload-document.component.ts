import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'upload-document-component',
  templateUrl: './upload-document.component.html',
  styleUrls: [ './upload-document.component.css' ]
})
export class UploadDocumentComponent  {
  name = 'Angular ' + VERSION.major;
}
