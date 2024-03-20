import { SearchOutlined } from "@ant-design/icons";
import { Space } from "antd";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import { IColumnSearch } from "../../types/IColumnSearch";

export default function ColumnSearch({setSelectedKeys,confirm}: IColumnSearch) {
  return (
    <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
    <CustomInput onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])} confirm={confirm} />
      <Space>
        <CustomButton content="Search" type="primary" icon={<SearchOutlined />} onClick={confirm}/>
      </Space>
    </div>
  );
}