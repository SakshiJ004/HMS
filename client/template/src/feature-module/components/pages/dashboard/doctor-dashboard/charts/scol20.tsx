// import { useState } from "react";
// import Chart from "react-apexcharts";

// const SCol20Chart = () => {
//   const [chartOptions] = useState<any>({
//     chart: {
//       height: 250,
//       type: "line",
//       toolbar: { show: false },
//       stacked: false,
//     },
//     stroke: {
//       width: [0, 2],
//       curve: "smooth",
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: "15%",
//         borderRadius: 4,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       type: ["solid", "gradient"],
//       gradient: {
//         shadeIntensity: 1,
//         opacityFrom: 0.4,
//         opacityTo: 0,
//         stops: [0, 90, 100],
//         colorStops: [
//           {
//             offset: 0,
//             color: "#434BAD",
//             opacity: 0.4,
//           },
//           {
//             offset: 100,
//             color: "#ffffff",
//             opacity: 0,
//           },
//         ],
//       },
//     },
//     colors: ["#3B28CC", "#00B96B"],
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
//           fontSize: "13px",
//         },
//       },
//     },
//     yaxis: {
//       min: 0,
//       max: 400,
//       labels: {
//         style: {
//           fontSize: "13px",
//         },
//         offsetX: -10,
//       },
//     },
//     tooltip: {
//       shared: true,
//       intersect: false,
//       custom: function ({ series, dataPointIndex, w }: any) {
//         const total = series[0][dataPointIndex];
//         const completed = series[1][dataPointIndex];
//         return `<div class="apex-tooltip">
//           <strong>${w.globals.labels[dataPointIndex]}</strong><br/>
//           <span style="color:#3B28CC">●</span> Total Appointments: ${total}<br/>
//           <span style="color:#00B96B">●</span> Completed: ${completed}
//         </div>`;
//       },
//     },
//     legend: { show: false },
//     grid: {
//       borderColor: "#eee",
//       strokeDashArray: 4,
//       padding: {
//         left: 0,
//         right: -10,
//       },
//     },
//   });

//   const [series] = useState([
//     {
//       name: "Total Appointments",
//       type: "bar",
//       data: [360, 280, 290, 270, 340, 220, 230, 180, 260, 200, 350, 400],
//     },
//     {
//       name: "Completed",
//       type: "area",
//       data: [200, 195, 190, 185, 200, 160, 170, 165, 210, 215, 225, 230],
//     },
//   ]);

//   return (
//     <div id="s-col-20">
//       <Chart options={chartOptions} series={series} type="line" height={250} />
//     </div>
//   );
// };

// export default SCol20Chart;



import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface ChartData {
  _id: any;
  total: number;
  completed: number;
}

interface SCol20ChartProps {
  data?: ChartData[];
  period?: 'monthly' | 'weekly' | 'yearly';
}

const SCol20Chart = ({ data = [], period = 'monthly' }: SCol20ChartProps) => {
  const [chartOptions, setChartOptions] = useState<any>({});
  const [series, setSeries] = useState<any[]>([]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Extract labels based on period
    let labels: string[] = [];
    if (period === 'monthly') {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      labels = months;
    } else if (period === 'weekly') {
      labels = data.map((_, index) => `Week ${index + 1}`);
    } else if (period === 'yearly') {
      labels = data.map(item => item._id.year?.toString() || '');
    }

    // Extract data
    const totalData = data.map(item => item.total || 0);
    const completedData = data.map(item => item.completed || 0);

    setSeries([
      {
        name: "Total Appointments",
        data: totalData,
      },
      {
        name: "Completed Appointments",
        data: completedData,
      }
    ]);

    setChartOptions({
      chart: {
        height: 320,
        type: "area",
        toolbar: { show: false },
      },
      colors: ["#4A3AFF", "#10D876"],
      dataLabels: { enabled: false },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      grid: {
        strokeDashArray: 5,
        borderColor: "#EDEFF5",
      },
      xaxis: {
        categories: labels,
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        min: 0,
      },
      legend: {
        show: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          opacityFrom: 0.5,
          opacityTo: 0.1,
        },
      },
    });
  }, [data, period]);

  return (
    <div id="s-col-20">
      <Chart
        options={chartOptions}
        series={series}
        type="area"
        height={320}
      />
    </div>
  );
};

export default SCol20Chart;