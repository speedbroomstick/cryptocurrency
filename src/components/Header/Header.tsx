import { Spin } from "antd";
import { useCurrency } from "../../hooks/useCurrency";
import "./header.scss";
import { IParsedCurrency } from "../../types/ICurrency";
import BriefCase from "../BriefCase/BriefCase";

export default function Header() {
  const { data } = useCurrency();

  return (
    <>
      {data ? (
        <header className="topHeader">
          <div className="currency">
            <DivTopCoin data={data[0]} />
            <DivTopCoin data={data[1]} />
            <DivTopCoin data={data[2]} />
          </div>
          <BriefCase />
        </header>
      ) : (
        <Spin size="small" />
      )}
    </>
  );
}

function DivTopCoin({ data }: { data: IParsedCurrency }) {
  return (
    <div className="topCoin">
      <img src={data.icon} alt="no photo" width="20" height="20" />
      <p>${data.priceUsd}</p>
    </div>
  );
}
