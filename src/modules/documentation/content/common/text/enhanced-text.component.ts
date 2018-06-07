import {Component, Input, Renderer2} from "@angular/core";
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'enhanced-text',
  templateUrl: './enhanced-text.component.html',
  styleUrls: ['./enhanced-text.component.css']
})
export class EnhancedTextComponent implements ControlValueAccessor {
  @Input() text: string;

  inputEnabled: boolean;

  onChange = (text: string) => {};

  constructor(
    private renderer: Renderer2
  ) { }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.text = obj;
    }

    this.inputEnabled = this.text.length === 0;
    this.onChange(this.text);
  }

  enableInput(): void {
    this.inputEnabled = true;
    setTimeout(() => {
      this.renderer.selectRootElement('#enhancedTextInput').focus();
    }, 10);
  }

  disableInput(): void {
    this.inputEnabled = false;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
