import { Input } from "antd";
import { ICustomInput } from "../../types/ICustomInput";

export default function CustomInput({onChange,placeholder="Search.."}:ICustomInput) {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      style={{ marginBottom: 8, display: "block" }}
    />
  );
}
