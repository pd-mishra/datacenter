import { Component, OnInit, OnDestroy } from '@angular/core';

interface Metric {
  used: number,
  available: number
};

interface Node {
  name: string,
  cpu: Metric,
  mem: Metric
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {
  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.generateData();

    this.interval = setInterval(() => {
      this.generateData();
    }, 15000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0 };
    this.mem = { used: 0, available: 0 };
    
  }

}
