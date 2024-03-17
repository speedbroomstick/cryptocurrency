import { ITableCurrency } from "../../types/ITable";
import { Table } from "antd";
import { columnsData } from "../../data/columnsData";

export default function TableCurrency({ isLoading,dataSource }: ITableCurrency) {

  return <Table loading={isLoading} columns={columnsData} dataSource={dataSource} />;
}
