import React from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./table.scss";
import { setIsOpenModal } from "../../redux/currentPageReducer";

function GlobalTable() {
  const { currentPage, values } = useSelector((s) => s?.current_Page_Reducer);

  const dispatch = useDispatch();

  const onClickRow = (record) => {
    return {
      onClick: () => {},
      onDoubleClick: () => {
        dispatch(setIsOpenModal(true));
      },
    };
  };

  const setRowClassName = (record) => {
    // return record?.id === rowId ? "blue" : "";
  };

  return (
    <div className="site_table">
      <Table
        columns={currentPage?.columns}
        dataSource={values}
        // loading={loading}
        className="main-table"
        onRow={onClickRow}
        rowClassName={setRowClassName}
        scroll={{
          y: 450,
        }}
        pagination={{
          position: ["bottomCenter"],
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"],
        }}
      />
    </div>
  );
}

export default GlobalTable;
