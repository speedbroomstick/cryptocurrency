import { InputNumber } from "antd";
import "./productItem.scss";
import { useState } from "react";
import { IProductItem } from "../../types/IProductItem";

export default function ProductItem({icon,name,cost,count,setCount,}: IProductItem) {
  const [countDefault, setCountDefault] = useState(count);
  setCount ??= setCountDefault;

  return (
    <div className="modalAdd">
      <img src={icon} alt="no photo" />
      <p>{name}</p>
      <InputNumber
        min={1}
        max={10}
        defaultValue={setCount == setCountDefault ? countDefault : count}
        onChange={(value) => setCount!(value! as 1 | 10)}
      />
      <p>
        <strong>
          {(
            cost! * (setCount == setCountDefault ? countDefault : count)
          ).toFixed(2)}{" "}
          USD
        </strong>
      </p>
    </div>
  );
}
