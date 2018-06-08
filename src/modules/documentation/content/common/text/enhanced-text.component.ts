import {Component, forwardRef, Input, Renderer2} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'enhanced-text',
  templateUrl: './enhanced-text.component.html',
  styleUrls: ['./enhanced-text.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => EnhancedTextComponent),
    }
  ]
})
export class EnhancedTextComponent implements ControlValueAccessor {
  @Input() text: string;
  @Input() name: string;
  @Input() autoHideInput: boolean = true;

  inputEnabled: boolean;

  onChange = (text: string) => {};

  constructor(
    private renderer: Renderer2
  ) { }

  writeValue(obj: any): void {
    if (obj !== null && obj !== undefined) {
      this.text = obj;
      this.inputEnabled = !this.autoHideInput || this.text.length === 0;
    }

    this.onChange(this.text);
  }

  enableInput(): void {
    this.inputEnabled = true;
    setTimeout(() => {
      this.renderer.selectRootElement('#enhancedTextInput').focus();
    }, 10);
  }

  disableInput(): void {
    this.inputEnabled = !this.autoHideInput;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
