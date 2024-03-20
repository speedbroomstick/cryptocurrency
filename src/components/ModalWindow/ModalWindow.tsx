import { Modal } from "antd";
import "./modalWindow.scss";
import { IModalWindow } from "../../types/IModalWindow";

export default function ModalWindow({title,open,onOk,onCancel,children,}: IModalWindow) {
    
  return (
    <Modal title={title} open={open} onOk={onOk} onCancel={onCancel}>
      {children}
    </Modal>
  );
}