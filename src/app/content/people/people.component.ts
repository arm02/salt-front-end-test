import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'people-component',
  templateUrl: './people.component.html',
  styleUrls: [ './people.component.css' ]
})
export class PeopleComponent  {
  name = 'Angular ' + VERSION.major;
}
