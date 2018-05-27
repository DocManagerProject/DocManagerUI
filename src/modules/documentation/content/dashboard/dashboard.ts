import {Component} from "@angular/core";
import {DashboardItem} from "./dashboardItem";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  id: number;
  name: string = 'example dashboard';
  items: DashboardItem[] = [DashboardItem.prepareDashboardItem(), DashboardItem.prepareDashboardItem(), DashboardItem.prepareDashboardItem()];
}
