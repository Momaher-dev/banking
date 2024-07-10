"use client";
import React from "react";
import { ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [123, 443, 55, 66, 77, 88, 99],
        backgroundColor: [
          "blue",
          "green",
          "blue",
          "yellow",
          "purple",
          "orange",
          "pink",
        ],
        borderColor: [
          "blue",
          "green",
          "blue",
          "yellow",
          "purple",
          "orange",
          "pink",
        ],
      },
    ],
    labels: [
      "Banks",
      "Cash",
      "Credit Card",
      "Debit Card",
      "Bank Transfer",
      "Mobile Recharge",
      "Others",
    ],
  };
  return (
    <Doughnut
      data={data}
      options={{ cutout: "60%", plugins: { legend: { display: false } } }}
    />
  );
};

export default DoughnutChart;
