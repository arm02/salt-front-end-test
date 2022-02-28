import { Component, EventEmitter, HostListener, Input, Output, VERSION } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query: string;
  constructor(private route: ActivatedRoute){
this.route.queryParamMap
    .subscribe((params) => {
      console.log(params) 
    });
  }

  ngOnInit() {
    this.route.queryParamMap
    .subscribe((params) => {
      console.log(params) 
    });
  }
}

