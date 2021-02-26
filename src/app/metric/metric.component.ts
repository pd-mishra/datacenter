import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges, ViewEncapsulation } 
from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class MetricComponent implements OnChanges {
  private _value: number = 0;
  private _max: number = 100;

  @Input('used') value: number = 0;

  @Input('available') max: number = 100;

  ngOnChanges(changes) {
    if (changes.value && isNaN(changes.value.currentValue)) this.value = 0;
    if (changes.max && isNaN(changes.max.currentValue)) this.max = 0;
  }
  
  isDanger() {
    return this.value / this.max > 0.7;
  }
  
  constructor() { }

}
