import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export function addIntoBriefCase({product,setActiveAddModal}:{product:IProduct,setActiveAddModal:ActiveAddModal}){
    const briefcase = Array.from(JSON.parse(localStorage.getItem('briefcase')!)??[]);
    localStorage.setItem("briefcase",JSON.stringify([...briefcase,product]));
    setActiveAddModal(false);
    window.location.reload();
  };

type ActiveAddModal = ActionCreatorWithPayload<boolean, "activeAddModal/setActiveAddModal">