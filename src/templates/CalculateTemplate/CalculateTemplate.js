import { Space } from "antd";
import { NUMBER, STRING } from "../../Components/constant/inputTypes";
import { CALCULATE_PAGE } from "../../Components/constant/pageConstant";
import { CALCULATE_PATH } from "../../Components/constant/pagePath";
import ActionTable from "../../Components/GlobalTable/ActionTable/ActionTable";

export const CalculateTemplate = {
  text: "Calculate",
  icon: "",
  path: CALCULATE_PATH,
  type: CALCULATE_PAGE,
  isOpenModal: false,
  optionName: "/",
  modal: {
    width: 500,
  },
  form: [
    {
      grid: {
        colmuns: "repeat(7, 1fr)",
        row: "repeat(1, 4fr)",
      },

      inputs: [
        {
          type: STRING,
          name: "id",
          placeholder: "Nomer",
          gridColumn: "1 / 6",
        },
        {
          type: STRING,
          name: "width",
          placeholder: "Width Sum",
          gridColumn: "6 / 8",
        },
        {
          type: STRING,
          name: "sum",
          placeholder: "Height Sum",
          gridColumn: "1 / 8",
          gridRow: '2 / 2'
        },
      ],
    },
  ],
  columns: [
    {
      title: "№",
      dataIndex: "id",
      width: "40px",
    },
    {
      title: "Width Sum",
      dataIndex: "width",
      width: "200px",
    },
    {
      title: "Height Sum",
      dataIndex: "sum",
      width: "350px",
    },
    {
      title: "Action",
      width: "350px",
      render: (_, record) => (
        <Space size="middle">
          <ActionTable record={record} />
        </Space>
      ),
    },
  ],
};
