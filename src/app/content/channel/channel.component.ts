import { Component, EventEmitter, HostListener, Input, Output, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'channel-component',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
})
export class ChannelComponent {
  arrayData = [
    {
      'name': 'Google'
    },
    {
      'name': 'Dribble'
    },
    {
      'name': 'Microsoft'
    },
    {
      'name': 'Binance'
    },
    {
      'name': 'Weather Channel'
    },
    {
      'name': 'Gurus'
    },
    {
      'name': 'iMedia'
    },
    {
      'name': 'Creativeye'
    },
    {
      'name': 'Khan Studio'
    },
    {
      'name': 'Yahoo'
    }
  ]
  onScroll() {
    var data2 = [
      {
        'name': 'Google'
      },
      {
        'name': 'Dribble'
      },
      {
        'name': 'Microsoft'
      },
      {
        'name': 'Binance'
      },
      {
        'name': 'Weather Channel'
      },
      {
        'name': 'Gurus'
      },
      {
        'name': 'iMedia'
      },
      {
        'name': 'Creativeye'
      },
      {
        'name': 'Khan Studio'
      },
      {
        'name': 'Yahoo'
      }
    ]
    for(let datas of data2){
      this.arrayData.push(datas)
    }
  }
}

