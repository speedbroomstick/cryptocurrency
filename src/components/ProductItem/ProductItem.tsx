import { InputNumber } from "antd";
import "./productItem.scss"
import { useState } from "react";

export default function ProductItem({ icon, name, cost, count, setCount }: ProductItem) {
    const [countDefault, setCountDefault] = useState(count);
    setCount ??= setCountDefault;

    return (
        <div className="modalAdd">
            <img src={icon} alt="no photo" />
            <p>{name}</p>
            <InputNumber
                min={1}
                max={10}
                defaultValue={(setCount == setCountDefault?countDefault:count)}
                onChange={(value) => setCount!(value! as 1|10)}
            />
            <p>
                <strong>{(cost! * (setCount == setCountDefault?countDefault:count)).toFixed(2)} USD</strong>
            </p>
        </div>
    );
}

interface ProductItem {
    icon?: string;
    name?: string;
    cost?: number;
    count: number;
    setCount?(value: 1 | 10): void;
}