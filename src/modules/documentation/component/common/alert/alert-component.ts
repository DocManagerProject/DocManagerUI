export interface AlertComponent {
  show(): void;
  hide(): void;
  setMessage(message: string): void;
}
