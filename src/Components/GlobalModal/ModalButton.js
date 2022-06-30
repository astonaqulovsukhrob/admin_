import React, { useState } from "react";
import { Button, Popconfirm, Tooltip, message } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { setIsOpenModal } from "../../redux/currentPageReducer";

function ModalButton() {
  const { currentPage, rowId, value } = useSelector((s) => s?.unsaved__reducer);
  const [isRef, setisRef] = useState(false);
  const dispatch = useDispatch();

  const onConfirm = () => {
    setisRef(true);
  };

  const onCancel = () => {};

  const showModal = () => {
    dispatch(setIsOpenModal(true));
  };

  const handleEdit = () => {
    // if (rowId) {
    dispatch(setIsOpenModal(true));
    // }
  };

  return (
    <div className="modal_button">
      {" "}
      <Tooltip placement="top" title={"Қўшиш"}>
        <Button type="primary" onClick={showModal}>
          <PlusOutlined /> Қўшиш
        </Button>
      </Tooltip>
      <Tooltip placement="top" title={"Ўзгартириш"}>
        {false ? (
          <Button type="primary" onClick={handleEdit} style={{ margin: 8 }}>
            <EditOutlined /> Ўзгартириш
          </Button>
        ) : (
          <Popconfirm
            title="1 та қаторни белгилнг!"
            okText="Ҳа"
            cancelText="Орқага"
            onConfirm={onConfirm}
            onCancel={onCancel}
          >
            <Button type="primary" onClick={handleEdit} style={{ margin: 8 }}>
              <EditOutlined /> Ўзгартириш
            </Button>
          </Popconfirm>
        )}
      </Tooltip>
      <Tooltip placement="top" title="Ўчириш">
        <Button type="danger">
          <Popconfirm
            title={false ? "Ўчирасизми ?" : "1 та қаторни белгилнг!"}
            okText="Ҳа"
            cancelText="Орқага"
            onConfirm={onConfirm}
            onCancel={onCancel}
          >
            <DeleteOutlined /> Ўчириш
          </Popconfirm>
        </Button>
      </Tooltip>
    </div>
  );
}

export default ModalButton;
