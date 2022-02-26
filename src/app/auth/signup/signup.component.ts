import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.css' ]
})
export class SignUpComponent  {
  name = 'Angular ' + VERSION.major;
}
