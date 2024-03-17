import { SizeType } from "antd/es/config-provider/SizeContext";

export interface ICustomButton{
    type?:"link" | "text" | "primary" | "default" | "dashed";
    onClick?():void;
    icon?:React.ReactNode;
    size?:SizeType;
    content?:string
}