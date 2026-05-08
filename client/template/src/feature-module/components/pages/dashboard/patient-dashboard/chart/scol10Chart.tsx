import React from "react";
import Chart from "react-apexcharts";

// ← Backend { _id, count } पाठवतो — हाच type वापर
type DeptData = {
  _id: string;
  count: number;
};

type Props = {
  data?: DeptData[];
};

const SCol10Chart: React.FC<Props> = ({ data = [] }) => {
  const categories = data.length > 0
    ? data.map(d => d._id || 'Unknown')
    : ['No Data'];

  const counts = data.length > 0
    ? data.map(d => d.count || 0)
    : [0];

  const chartOptions = {
    chart: {
      type: "bar" as const,
      height: 340,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories,
      position: "top",
      labels: {
        style: { fontSize: "12px", colors: "#6C7688" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: { fontSize: "12px", colors: "#0A1B39" },
      },
    },
    grid: {
      xaxis: { lines: { show: true } },
    },
    colors: ["#3538CD"],
    legend: { show: false },
    tooltip: { enabled: true },
  };

  const chartSeries = [
    {
      name: "Appointments",
      data: counts,
    },
  ];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      height={340}
    />
  );
};

export default SCol10Chart;