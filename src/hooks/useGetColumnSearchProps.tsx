import { TableColumnType } from "antd";
import { IParsedCurrency } from "../types/ICurrency";
import ColumnSearch from "../components/ColumnSearch/ColumnSearch";
import { SearchOutlined } from "@ant-design/icons";

type DataIndex = keyof IParsedCurrency;

export const useGetColumnSearchProps = (dataIndex: DataIndex): TableColumnType<IParsedCurrency> => ({
    filterDropdown: ({setSelectedKeys,confirm}) => <ColumnSearch confirm={confirm} setSelectedKeys={setSelectedKeys} />,
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]!
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
  });
