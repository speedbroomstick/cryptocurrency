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