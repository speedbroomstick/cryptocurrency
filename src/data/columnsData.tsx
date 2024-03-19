import { TableColumnsType } from "antd";
import { IParsedCurrency } from "../types/ICurrency";
import { useGetColumnSearchProps } from "../hooks/useGetColumnSearchProps";
import AddButton from "../components/AddButton/AddButton";

const style = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

export const columnsData: TableColumnsType<IParsedCurrency> = [
  {
    title: "Symbol",
    dataIndex: "symbol",
    key: "symbol",
    ...useGetColumnSearchProps("symbol"),
  },
  {
    title: "Icon",
    dataIndex: "icon",
    key: "icon",
    render: (url) => {
      return <img src={url} alt="no icon" width="64" height="64" />;
    },
  },
  {
    title: "Price",
    dataIndex: "priceUsd",
    key: "priceUsd",
    align: "center",
    sorter: (a, b) => +a.priceUsd - +b.priceUsd,
  },
  {
    title: "Market Cap",
    dataIndex: "marketCapUsd",
    key: "marketCapUsd",
    align: "center",
    sorter: (a, b) => +a.marketCapUsd - +b.marketCapUsd,
  },
  {
    title: "24h %",
    dataIndex: "changePercent24Hr",
    key: "changePercent24Hr",
    align: "center",
    sorter: (a, b) => +a.changePercent24Hr - +b.changePercent24Hr,
  },
  {
    title: "",
    dataIndex: "addButton",
    key: "addButton",
    render: () => {
      return (
        <div style={style}>
          <AddButton />
        </div>
      );
    },
  },
];
