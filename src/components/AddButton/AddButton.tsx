import { StarOutlined } from "@ant-design/icons";
import "./addButton.scss"
import { IParsedCurrency } from "../../types/ICurrency";
import { useActions } from "../../hooks/useActions";
import { typehandleAddButton } from "../../types/typeHandleAddButton";

export default function AddButton({onClick,record}:{onClick({}:typehandleAddButton):void,record:IParsedCurrency}){
    const {setActiveAddModal,setdataCurrencyForBuy} = useActions();
    return(
        <button className="addPortfolio" onClick={(e)=>onClick({e,record,setActiveAddModal,setdataCurrencyForBuy})}><StarOutlined />Add to portfolio</button>
    )
}










// onClick={(e)=>onClick(e,{
//     id:"Bitcoin",
//     icon: "https://assets.coincap.io/assets/icons/btc@2x.png",
//     symbol: "Bitcoin",
//     priceUsd: 62919.2363174404756360,
//     marketCapUsd:"s",
//     changePercent24Hr: "sda",
// },6)}

//{onClick,record}:{onClick(e:React.MouseEvent,data:IParsedCurrency,count:number):void,record:IParsedCurrency}