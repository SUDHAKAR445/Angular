import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent {
  dashboardCards: Array<{ title: string, value: number }> = [
    {
      title: 'Total Books',
      value: 500,
    },
    {
      title: 'Available Books',
      value: 450,
    },
    {
      title: 'Total Users',
      value: 30,
    },
    {
      title: 'Total Authors',
      value: 15,
    },
    {
      title: 'Total Genres',
      value: 20,
    },
    {
      title: 'Issued Books',
      value: 50,
    },
    {
      title: 'New Members',
      value: 5,
    },
    {
      title: 'Over Due Books',
      value: 8,
    },
  ];
}
