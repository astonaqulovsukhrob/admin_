import React from "react";
import { useDispatch } from "react-redux";
import { Delete_Icon, Edit_Icon } from "../../../assets/icon/icon";
import {
  setDelete,
  setIsOpenModal,
  setValue,
} from "../../../redux/currentPageReducer";
import "./style.scss";

function ActionTable({ record }) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setIsOpenModal(true));
    dispatch(setValue({ ...record }));
  };

  const hanldeDelete = () => {
    dispatch(setDelete({ ...record }));
  };

  return (
    <div className="action">
      <span className="edit" onClick={handleEdit}>
        <Edit_Icon /> Edit
      </span>
      <span className="delete" onClick={hanldeDelete}>
        <Delete_Icon /> Delete
      </span>
    </div>
  );
}

export default ActionTable;
