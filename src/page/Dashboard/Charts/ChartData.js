import { Column } from "@ant-design/charts";
import React from "react";

const ChartData = () => {
  const data = [
    {
      type: "M",
      value: 0.5,
    },
    {
      type: "Sales",
      value: 0.2,
    },
    {
      type: "Qancha sotib olingan",
      value: 0.1,
    },
    {
      type: "Qancha Sotilganligi",
      value: 0.19,
    },
    {
      type: "Product",
      value: 0.22,
    },
    {
      type: "Nechta qolgan",
      value: 0.5,
    },
    {
      type: "Kimga qo`yilgan",
      value: 0.1,
    },
    {
      type: "Yana bir narslarda hullas",
      value: 0.4,
    },
  ];
  const paletteSemanticRed = "#fff";
  const brandColor = "#fff";
  const config = {
    data,
    xField: "type",
    yField: "value",
    seriesField: "",
    color: ({ type }) => {
      if (type === "10-30分" || type === "30+分") {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default ChartData;
