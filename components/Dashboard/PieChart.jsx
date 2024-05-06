"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ["24%", "39%"],
        datasets: [
          {
            label: "",
            data: [24, 39],
            backgroundColor: ["#4A3AFF", "#E0C6FD"],
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          datalabels: {
            formatter: (value, context) => {
              return context.chart.data.labels[context.dataIndex];
            },
            color: "white",
            align: "center", // Align the label to the center
            anchor: "center", // Anchor the label to the center
          },
        },
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* main container */}
      <div className="w-[238px] h-[238px] flex justify-center items-center">
        <canvas ref={chartRef} />
      </div>
    </>
  );
};

export default PieChart;
