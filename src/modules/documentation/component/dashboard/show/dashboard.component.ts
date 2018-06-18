import {Component} from "@angular/core";
import {DashboardItem} from "../../../model/dashboard-item";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  id: number;
  name: string = 'example dashboard';
  items: DashboardItem[] = [DashboardItem.prepareDashboardItem(), DashboardItem.prepareDashboardItem(), DashboardItem.prepareDashboardItem()];
}
