import { Space } from "antd";
import { STRING } from "../../Components/constant/inputTypes";
import { CALCULATE_PAGE } from "../../Components/constant/pageConstant";
import { PAGES_PATH } from "../../Components/constant/pagePath";
import ActionTable from "../../Components/GlobalTable/ActionTable/ActionTable";

export const PagesTemplate = {
  text: "Pages",
  icon: "",
  path: PAGES_PATH,
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
          name: "Name",
          placeholder: "Name",
          gridColumn: "6 / 8",
        },
        {
          type: STRING,
          name: "new",
          placeholder: "New Page",
          gridColumn: "1 / 8",
          gridRow: "2 / 2",
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
      title: "Name",
      dataIndex: "Name",
      width: "200px",
    },
    {
      title: "New Page",
      dataIndex: "new",
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
