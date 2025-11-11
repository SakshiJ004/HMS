// import { useState } from "react";
// import Chart from "react-apexcharts";

// const SCol19Chart = () => {
//   const [chartOptions] = useState<any>({
//     chart: {
//       type: "bar",
//       height: 250,
//       stacked: true,
//       toolbar: { show: false },
//       sparkline: { enabled: false },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "25%",
//         borderRadius: 3,
//         distributed: false,
//       },
//     },
//     dataLabels: { enabled: false },
//     stroke: {
//       show: true,
//       width: 0,
//       colors: ["#fff"],
//     },
//     colors: ["#00D1D1", "#1E90FF", "#3B28CC"],
//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//       labels: {
//         style: {
//           fontSize: "14px",
//         },
//       },
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//       tickPlacement: "between",
//     },
//     yaxis: {
//       labels: {
//         style: {
//           fontSize: "14px",
//         },
//         formatter: (val: number) => `${val / 1000}K`,
//         offsetX: -10,
//       },
//     },
//     legend: {
//       position: "bottom",
//     },
//     grid: {
//       show: true,
//       strokeDashArray: 4,
//       padding: {
//         left: 0,
//         right: -10,
//       },
//     },
//     tooltip: { enabled: true },
//   });

//   const [series] = useState([
//     {
//       name: "Completed",
//       data: [
//         800, 1000, 1200, 1300, 1500, 700, 900, 1000, 1600, 1500, 1200, 1100,
//       ],
//     },
//     {
//       name: "Ongoing",
//       data: [700, 900, 1100, 1000, 1100, 600, 800, 950, 1300, 1200, 1000, 950],
//     },
//     {
//       name: "Rescheduled",
//       data: [600, 700, 1100, 1100, 1900, 500, 700, 850, 1500, 1600, 900, 850],
//     },
//   ]);

//   return (
//     <div id="s-col-19">
//       <Chart options={chartOptions} series={series} type="bar" height={250} />
//     </div>
//   );
// };

// export default SCol19Chart;


import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface ChartDataPoint {
  month?: string;
  day?: string;
  year?: string;
  completed: number;
  ongoing: number;
  rescheduled: number;
  total: number;
}

interface SCol19ChartProps {
  data: ChartDataPoint[];
  period: 'monthly' | 'weekly' | 'yearly';
}

const SCol19Chart = ({ data, period }: SCol19ChartProps) => {
  const [chartOptions, setChartOptions] = useState<any>({
    chart: {
      type: "bar",
      height: 250,
      stacked: true,
      toolbar: { show: false },
      sparkline: { enabled: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        borderRadius: 3,
        distributed: false,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 0,
      colors: ["#fff"],
    },
    colors: ["#00D1D1", "#1E90FF", "#3B28CC"],
    xaxis: {
      categories: [],
      labels: {
        style: {
          fontSize: "14px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tickPlacement: "between",
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
        },
        formatter: (val: number) => {
          if (val >= 1000) {
            return `${(val / 1000).toFixed(1)}K`;
          }
          return val.toString();
        },
        offsetX: -10,
      },
    },
    legend: {
      position: "bottom",
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 0,
        right: -10,
      },
    },
    tooltip: { enabled: true },
  });

  const [series, setSeries] = useState<Array<{ name: string; data: number[] }>>([
    {
      name: "Completed",
      data: [],
    },
    {
      name: "Ongoing",
      data: [],
    },
    {
      name: "Rescheduled",
      data: [],
    },
  ]);

  useEffect(() => {
    if (data && data.length > 0) {
      // Extract categories based on period
      const categories = data.map((item) => {
        if (period === 'weekly') return item.day || '';
        if (period === 'yearly') return item.year || '';
        return item.month || '';
      });

      // Extract series data
      const completedData = data.map((item) => item.completed);
      const ongoingData = data.map((item) => item.ongoing);
      const rescheduledData = data.map((item) => item.rescheduled);

      // Update chart options with new categories
      setChartOptions((prev: any) => ({
        ...prev,
        xaxis: {
          ...prev.xaxis,
          categories: categories,
        },
      }));

      // Update series data
      setSeries([
        {
          name: "Completed",
          data: completedData,
        },
        {
          name: "Ongoing",
          data: ongoingData,
        },
        {
          name: "Rescheduled",
          data: rescheduledData,
        },
      ]);
    }
  }, [data, period]);

  return (
    <div id="s-col-19">
      <Chart options={chartOptions} series={series} type="bar" height={250} />
    </div>
  );
};

export default SCol19Chart;