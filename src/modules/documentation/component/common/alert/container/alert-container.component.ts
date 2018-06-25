import {Component, ComponentFactoryResolver, ComponentRef, Type, ViewChild, ViewContainerRef} from "@angular/core";
import {SuccessAlertComponent} from "../success/success-alert.component";
import {AlertComponent} from "../alert-component";
import {ErrorAlertComponent} from "../error/error-alert.component";

@Component({
  selector: 'alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.css']
})
export class AlertContainerComponent {

  @ViewChild("alerts", {read: ViewContainerRef})
  componentRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  displaySuccess(message: string, timeout: number): void {
    this.displayAlert(SuccessAlertComponent, message, timeout);
  }

  displayError(message: string, timeout: number): void {
    this.displayAlert(ErrorAlertComponent, message, timeout);
  }

  private displayAlert(alertType: Type<any>, message: string, timeout: number): void {
    let componentRef = this.createAlert(alertType);
    componentRef.instance.setMessage(message);
    setTimeout(() => this.removeComponent(componentRef), timeout);
  }

  private createAlert<T extends AlertComponent>(componentType: Type<T>): ComponentRef<T> {
    let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    let componentRef = this.componentRef.createComponent(factory, 0);
    componentRef.instance.show();
    return componentRef;
  }

  private removeComponent<T extends AlertComponent>(componentRef: ComponentRef<T>): void {
    componentRef.instance.hide();
    setTimeout(() => componentRef.destroy(), 1000);
  }
}
