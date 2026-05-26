import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  chartBars = [
    { day: 'M', height: '40%', active: false },
    { day: 'T', height: '65%', active: false },
    { day: 'W', height: '50%', active: false },
    { day: 'T', height: '85%', active: false },
    { day: 'F', height: '70%', active: false },
    { day: 'S', height: '95%', active: true  },
    { day: 'S', height: '60%', active: false },
  ];
}
