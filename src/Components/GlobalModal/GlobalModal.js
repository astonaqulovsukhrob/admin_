import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Form from "../Form/Form";
import { CloseIcon } from "../../assets/icon/icon";
import "./modalStyle/modalStyle.scss";
import { setIsOpenModal } from "../../redux/currentPageReducer";

function GlobalModal() {
  const { currentPage } = useSelector((s) => s?.current_Page_Reducer);
  const dispatch = useDispatch();

  return (
    <>
      <Button type="primary" onClick={() => dispatch(setIsOpenModal(true))}>
        Qushish
      </Button>
      <Modal
        title={
          <div className="modal_header">
            <span>{currentPage?.text}</span>
            <span onClick={() => dispatch(setIsOpenModal(false))}>
              <CloseIcon />
            </span>
          </div>
        }
        visible={currentPage?.isOpenModal}
        footer=""
        width={currentPage?.modal?.width}
        style={{ marginTop: -60 }}
      >
        <Form />
      </Modal>
    </>
  );
}

export default GlobalModal;
