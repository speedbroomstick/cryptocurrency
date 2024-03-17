import { Button } from "antd";
import { ICustomButton } from "../../types/ICustomButton";

export default function CustomButton({content="",icon,size="small",type="default",onClick}:ICustomButton){
    return(
        <Button
        type={type}
        onClick={onClick}
        icon={icon}
        size={size}
        style={{ width: 90 }}
      >
        {content}
      </Button>
    )
}
