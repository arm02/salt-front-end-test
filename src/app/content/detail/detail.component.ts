import { Component, EventEmitter, HostListener, Input, Output, VERSION } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'detail-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  constructor(private route: ActivatedRoute){
    const uuidQuestionnaire: string = route.snapshot.params.id
  }
}

