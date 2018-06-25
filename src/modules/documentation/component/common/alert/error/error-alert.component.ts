import {Component} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AlertComponent} from "../alert-component";

@Component({
  selector: 'error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['../alert-component.css', './error-alert.component.css'],
  animations: [
    trigger("isVisible", [
      state('true' , style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('* => *', animate('300ms')),
    ])
  ]
})
export class ErrorAlertComponent implements AlertComponent {
  isVisible: boolean = false;
  message: string;

  hide(): void {
    this.isVisible = false;
  }

  show(): void {
    this.isVisible = true;
  }

  setMessage(message: string): void {
    this.message = message;
  }
}
