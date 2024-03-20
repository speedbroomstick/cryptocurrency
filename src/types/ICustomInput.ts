import { FilterConfirmProps } from "antd/es/table/interface";

export interface ICustomInput {
  placeholder?: string;
  value?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  confirm(param?: FilterConfirmProps | undefined):void;
}
