import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'all-channel-component',
  templateUrl: './all-channel.component.html',
  styleUrls: [ './all-channel.component.css' ]
})
export class AllChannelComponent  {
  arrayData = [
    {
      'name': 'Google',
      'path': 'https://pcsystemcolombia.com/wp-content/uploads/2021/01/google-logo-7.jpg'
    },
    {
      'name': 'Dribble',
      'path': 'https://www.fbcpompano.org/wp-content/uploads/2021/05/Basketball-League.jpg'
    },
    {
      'name': 'Microsoft',
      'path': 'http://www.fugleman.org/wp-content/uploads/2020/04/history-of-the-microsoft-logo-1.jpg'
    },
    {
      'name': 'Binance',
      'path': 'https://hargabelanja.com/wp-content/uploads/cara-daftar-binance.jpg'
    },
    {
      'name': 'Weather Channel',
      'path': 'https://nordicapis.com/wp-content/uploads/5-Best-Free-and-Paid-Weather-APIs-2019-e1587582023501.png'
    },
    {
      'name': 'Gurus',
      'path': 'https://i.dawn.com/primary/2019/01/5c4974416c279.jpg'
    },
    {
      'name': 'iMedia',
      'path': 'https://ml.globenewswire.com/Resource/Download/43b9ccf0-ea84-40b8-aa2b-87c411125a9b'
    },
    {
      'name': 'Creativeye',
      'path': 'https://logopond.com/logos/2b6986b06077ba63438bddc442bb4f4a.png'
    },
    {
      'name': 'Khan Studio',
      'path': 'https://tdesigns.in/td_content/uploads/2019/04/khan-studio-logo-2.jpg'
    },
    {
      'name': 'Yahoo',
      'path': 'https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png'
    }
  ]
}
