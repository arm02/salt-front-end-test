import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'signin-component',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.css' ]
})
export class SignInComponent  {
  name = 'Angular ' + VERSION.major;
}
