import React, { useState } from "react";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Form from "../Form/Form";
import ModalButton from "./ModalButton";
import { CloseIcon } from "../../assates/icon/icon";
import "./modalStyle/modalStyle.scss";
import { setIsOpenModal } from "../../redux/currentPageReducer";

function GlobalModal() {
  const { currentPage } = useSelector((s) => s?.current_Page_Reducer);
  const dispatch = useDispatch();

  return (
    <>
      <ModalButton />
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
