import { FilterConfirmProps } from "antd/es/table/interface";

export interface IColumnSearch {
    confirm: (param?: FilterConfirmProps | undefined) => void;
    setSelectedKeys: (selectedKeys: React.Key[]) => void;
  }
  