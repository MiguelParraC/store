import { Component, Input } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    console.log('constructor called');
    console.log('-', repeat(10));
  }

}
