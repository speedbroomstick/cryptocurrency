import { Table } from "antd";
import { columnsData } from "../../data/columnsData";
import { useCurrency } from "../../hooks/useCurrency";
import { IParsedCurrency } from "../../types/ICurrency";

export default function TableCurrency() {
  const { isLoading, data } = useCurrency();

  function handleClick(row: IParsedCurrency) {
    window.location.href = "currencyInfo?id=" + row.id;
  }

  return (
    <Table
      loading={isLoading}
      columns={columnsData}
      dataSource={data}
      pagination={{ position: ["bottomCenter"] }}
      scroll={{ x: 1000}}
      onRow={(record) => {
        return {
          onClick: () => handleClick(record),
        };
      }}
    />
  );
}
