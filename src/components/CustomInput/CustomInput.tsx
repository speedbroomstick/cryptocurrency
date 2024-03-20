import { Input } from "antd";
import { ICustomInput } from "../../types/ICustomInput";

export default function CustomInput({onChange,confirm,placeholder="Search.."}:ICustomInput) {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      onPressEnter={() => confirm()}
      style={{ marginBottom: 8, display: "block" }}
    />
  );
}
