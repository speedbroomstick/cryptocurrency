import { Button, Spin } from "antd";
import { useCurrency } from "../../hooks/useCurrency";
import "./header.scss";
import { IParsedCurrency } from "../../types/ICurrency";
import { WalletFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import ProductItem from "../ProductItem/ProductItem";
import { calculateSumBriefcase } from "../../features/calculateSumBriefcase";

export default function Header() {
  const { data } = useCurrency();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<IProduct[]>([]);
  const showModal = () => {
    const items = JSON.parse(localStorage.getItem('briefcase')!);
    if (items) {
      setItems(items);
    }
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    localStorage.clear()
    window.location.reload();
  };
  const handleDelete = (name:string)=>{
    let items = JSON.parse(localStorage.getItem('briefcase')!);
    if (items) {
      items = items.filter((item:IProduct)=>item.name !== name)
      setItems(items);
      localStorage.setItem("briefcase",JSON.stringify(items));
      window.location.reload()
    }
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('briefcase')!);
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <>
      {data ? (
        <header className="topHeader">
          <div className="currency">
            <DivTopCoin data={data[0]} />
            <DivTopCoin data={data[1]} />
            <DivTopCoin data={data[2]} />
          </div>
          <div className="briefcase">
            <div onClick={showModal}>
              <WalletFilled />
              <h4>{calculateSumBriefcase(items, data).newSum}USD + {calculateSumBriefcase(items, data).difrience} ({calculateSumBriefcase(items, data).percentage || 0}%)</h4>
            </div>
          </div>
          <ModalWindow title="Briefcase" open={isModalOpen} onOk={handleOk} onCancel={() => setIsModalOpen(false)}>
            {items?.map(item => (
              <div style={{display:"flex", alignItems:"center"}} key={item.name}>
                <ProductItem name={item.name} icon={item.icon} cost={item.priceUsd} count={item.count} />
                <Button type="primary" onClick={() => handleDelete(item.name!)} danger>Remove</Button>
              </div>
            ))}
          </ModalWindow>
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
