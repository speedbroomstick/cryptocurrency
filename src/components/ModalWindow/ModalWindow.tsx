import { Modal } from "antd";
import "./modalWindow.scss";

export default function ModalWindow({title,open,onOk,onCancel,children,}: IModalWindow) {
    
  return (
    <Modal title={title} open={open} onOk={onOk} onCancel={onCancel}>
      {children}
    </Modal>
  );
}

interface IModalWindow {
  title?: string;
  open?: boolean;
  onOk?(): void;
  onCancel?(): void;
  children: React.ReactNode;
}