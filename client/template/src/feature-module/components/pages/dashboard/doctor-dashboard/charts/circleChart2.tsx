// import { useState } from "react";
// import Chart from "react-apexcharts";

// const CircleChart2 = () => {
//   const [chartOptions] = useState<any>({
//     chart: {
//       type: "donut",
//       height: 270,
//       width: "100%",
//     },
//     labels: ["Completed", "Pending", "Cancelled"],
//     colors: ["#27AE60", "#E2B93B", "#EF1E1E"], // green, yellow, red
//     legend: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       width: 2,
//       colors: ["#fff"],
//     },
//     plotOptions: {
//       pie: {
//         donut: {
//           size: "75%",
//           labels: {
//             show: false, // Hide center label
//           },
//         },
//       },
//     },
//     tooltip: {
//       enabled: true,
//     },
//   });

//   const [series] = useState([80, 10, 10]);

//   return (
//     <div id="circle-chart-2">
//       <Chart options={chartOptions} series={series} type="donut" height={270} />
//     </div>
//   );
// };

// export default CircleChart2;

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface CircleChart2Props {
  data?: {
    completed: number;
    pending: number;
    cancelled: number;
  };
}

const CircleChart2 = ({ data }: CircleChart2Props) => {
  const [chartOptions, setChartOptions] = useState<any>({});
  const [series, setSeries] = useState<number[]>([260, 21, 50]);

  useEffect(() => {
    if (data) {
      setSeries([data.completed, data.pending, data.cancelled]);
    }

    setChartOptions({
      chart: {
        type: "donut",
        height: 250,
      },
      labels: ["Completed", "Pending", "Cancelled"],
      colors: ["#10D876", "#FFC107", "#FF4B4B"],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 200,
            },
          },
        },
      ],
    });
  }, [data]);

  return (
    <Chart
      options={chartOptions}
      series={series}
      type="donut"
      height={250}
    />
  );
};

export default CircleChart2;