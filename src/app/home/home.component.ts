import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent  {
  name = 'Angular ' + VERSION.major;
}
