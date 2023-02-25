import { Component, OnInit } from '@angular/core';
import { Customer370DashboardsService } from '../services/customer370-dashboards.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {
  public customer370DashboardsDashboards: any = null;

  constructor(
    private customer370DashboardsService: Customer370DashboardsService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.customer370DashboardsService.getDashboards().subscribe(data => this.customer370DashboardsDashboards = data);
  }
}
