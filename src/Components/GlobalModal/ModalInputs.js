import { Input, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../redux/currentPageReducer";
import { STRING } from "../constant/inputTypes";
import "../inputStyle/input.scss";
const { Option } = Select;

const ModalInputs = (props) => {
  const { placeholder, name, gridRow, gridColumn, type, maxWidth, width } =
    props;
  let label = placeholder;
  let input = null;
  const { value } = useSelector((s) => s?.current_Page_Reducer);
  const [focusInput, setFocusInput] = useState();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setValue({ ...value, ...e }));
  };

  const defaultStyle = {
    gridColumn,
    gridRow,
    position: "relative",
  };

  switch (type) {
    case STRING:
      input = (
        <div style={defaultStyle}>
          <Input
            value={value[name]}
            name={name}
            placeholder={placeholder}
            type="text"
            onFocus={() => setFocusInput(true)}
            onChange={(e) =>
              handleChange({
                [e.target.name]: e.target.value,
              })
            }
          />
          <label className={"special_label"}>{label && label}</label>
        </div>
      );
      break;
    default:
      break;
  }
  return input;
};

export default ModalInputs;
