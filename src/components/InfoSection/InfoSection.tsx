import { RollbackOutlined } from "@ant-design/icons";
import "./infoSection.scss";
import AddButton from "../AddButton/AddButton";
import { IInfoSection } from "../../types/IInfoSection";
import { handleAddButton } from "../../features/handlAddButton";

export default function InfoSection({ dataCurrency }: IInfoSection) {
  function handleClick() {
    window.location.href = "/cryptocurrency/";
  }
  
  if(dataCurrency)
  return (
    <section>
      <header>
        <div className="icon">
          <img src={dataCurrency.icon} width="32" height="32" alt="no icon" />
          <h3>{dataCurrency.name}</h3>
          <p>{dataCurrency.symbol}</p>
        </div>
        <button className="back" onClick={handleClick}>
          <RollbackOutlined />
        </button>
        <h2>${dataCurrency.priceUsd}</h2>
        <AddButton record={dataCurrency} onClick={handleAddButton}/>
      </header>
      <main>
        <DivAmount label="Rank" value={dataCurrency.rank!} />
        <DivAmount
          label="Total supply"
          value={dataCurrency.supply + " " + dataCurrency.symbol}
        />
        <DivAmount label="arket cap" value={"$" + dataCurrency.marketCapUsd} />
        <DivAmount
          label="Max. supply"
          value={dataCurrency.maxSupply + " " + dataCurrency.symbol}
        />
      </main>
    </section>
  );
}

function DivAmount({ label, value }: { label: string; value: string }) {
  return (
    <div className="amount">
      <p>{label}</p>
      <p className="value">
        <strong>{value}</strong>
      </p>
    </div>
  );
}
