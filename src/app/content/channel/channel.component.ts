import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'channel-component',
  templateUrl: './channel.component.html',
  styleUrls: [ './channel.component.css' ]
})
export class ChannelComponent  {
  name = 'Angular ' + VERSION.major;
}
