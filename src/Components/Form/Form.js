import React from "react";
import ModalInputs from "../GlobalModal/ModalInputs";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenModal, setValue, setValues } from "../../redux/currentPageReducer";
import "./form.scss";
import { useState } from "react";

function Form() {
  const { currentPage, value, values } = useSelector(
    (s) => s?.current_Page_Reducer
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setIsOpenModal(false));
    dispatch(setValues([...values, value]));
    dispatch(setValue({}));
  };

  return (
    <form className="site_form" onSubmit={handleSubmit}>
      {currentPage?.form?.map((row, i) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: row?.gird?.columns,
            gridTemplateRows: row?.grid?.rows,
            gap: "30px",
          }}
        >
          {row?.inputs?.map((input) => {
            return <ModalInputs {...input} />;
          })}
        </div>
      ))}
      <div className="site_form_button">
        <button type="submit">Saqlash</button>
      </div>
    </form>
  );
}

export default Form;
