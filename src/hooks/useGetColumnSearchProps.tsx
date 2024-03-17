import { TableColumnType } from "antd";
import { IParsedCurrency } from "../types/ICurrency";
import ColumnSearch from "../components/ColumnSearch/ColumnSearch";

type DataIndex = keyof IParsedCurrency;

export const useGetColumnSearchProps = (dataIndex: DataIndex): TableColumnType<IParsedCurrency> => ({
    filterDropdown: ({setSelectedKeys,confirm}) => <ColumnSearch confirm={confirm} setSelectedKeys={setSelectedKeys} />,
    onFilter: (value, record) =>
      record[dataIndex]!
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
  });
