import { Input } from "antd";

const { TextArea } = Input;
const CustomInput = (props) => {
  return props.type === "text" || props.type === "date" ? (
    <Input {...props} />
  ) : props.type === "textarea" ? (
    <TextArea {...props} />
  ) : null;
};

export default CustomInput;
