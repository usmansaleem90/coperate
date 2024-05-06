"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Datalabels,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register the plugins with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
function DonutChart() {
  const data = {
    labels: ["26", "24"],
    datasets: [
      {
        label: "Poll",
        data: [26, 24],
        backgroundColor: ["#4A3AFF", "#E0C6FD"],
        borderColor: ["#4A3AFF", "#E0C6FD"],
      },
    ],
  };

  const options = {
    cutoutPercentage: 100, // Adjust the value to increase or decrease the center size
    plugins: {
      datalabels: {
        formatter: (value) => {
          // Format the label as desired
          return `${value}%`;
        },
        color: "white",
        font: {
          weight: "bold",
          size: 16,
        },
      },
    },
    labels: {
      display: false,
    },
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();

      ctx.font = "bolder 30px sans-serif";
      ctx.fillStyle = "#1E1B39";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "1.50",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );

      // Add the additional title below "1.50"
      ctx.font = "400 13.57px sans-serif";
      ctx.fillStyle = "#9291A5";
      ctx.fillText(
        "Additional Title",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y + 20 // Adjust the position as needed
      );
    },
  };

  return (
    <div className="DonutChart">
      <div
        style={{
          widows: "268px",
          height: "268px",
          margin: "auto",
        }}
      >
        <Doughnut
          data={data}
          options={options}
          plugins={[textCenter]}
        ></Doughnut>
      </div>
    </div>
  );
}

export default DonutChart;
