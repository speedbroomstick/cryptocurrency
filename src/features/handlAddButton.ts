import { typehandleAddButton } from "../types/typeHandleAddButton";

export function handleAddButton({e,record,setActiveAddModal,setdataCurrencyForBuy}:typehandleAddButton){
    e.stopPropagation()
    setdataCurrencyForBuy(record);
    setActiveAddModal(true)
}