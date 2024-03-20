export interface IModalWindow {
  title?: string;
  open?: boolean;
  onOk?(): void;
  onCancel?(): void;
  children: React.ReactNode;
}
