import { WalletFilled } from "@ant-design/icons";
import ModalWindow from "../ModalWindow/ModalWindow";
import { Button } from "antd";
import ProductItem from "../ProductItem/ProductItem";
import { calculateSumBriefcase } from "../../features/calculateSumBriefcase";
import { useEffect, useState } from "react";
import { useCurrency } from "../../hooks/useCurrency";
import { deleteItem } from "../../features/deleteItem";
import { updateCurrencyPrice } from "../../features/updateCurrencyPrice";

export default function BriefCase() {
  const { data } = useCurrency();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<IProduct[]>([]);
  const showModal = () => {
    const items = JSON.parse(localStorage.getItem("briefcase")!);
    if (items) {
      setItems(items);
    }
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("briefcase")!);
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <>
      <div className="briefcase">
        <Button onClick={showModal}>
          <WalletFilled />
          {calculateSumBriefcase(items, data!).newSum}USD{" "}
          {calculateSumBriefcase(items, data!).difrience} (
          {calculateSumBriefcase(items, data!).percentage || 0}%)
        </Button>
      </div>
      <ModalWindow
        title="Briefcase"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        {items?.map((item) => (
          <div
            style={{ display: "flex", alignItems: "center" }}
            key={item.name}
          >
            <ProductItem
              name={item.name}
              icon={item.icon}
              cost={updateCurrencyPrice(data!,item.name!)}
              count={item.count}
            />
            <Button
              type="primary"
              onClick={() => deleteItem(item.name!, setItems)}
              danger
            >
              Remove
            </Button>
          </div>
        ))}
      </ModalWindow>
    </>
  );
}
