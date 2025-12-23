// import { useState } from "react";
// import Chart from "react-apexcharts";
// import type { DepartmentStat } from "../../../../../api/dashboardService";

// const CircleChart = () => {
//   const [chartOptions] = useState<any>({
//     chart: {
//       type: "donut",
//       height: 270,
//       width: "100%",
//     },
//     labels: ["214 Cardiology", "121 Neurolgy", "150 Dental"],
//     colors: ["#6DA6F2", "#5C60CC", "#9B51B6"],
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
//           size: "60%",
//           labels: {
//             show: true,
//             name: {
//               show: true,
//               fontSize: "16px",
//               fontWeight: 400,
//               offsetY: -10,
//               color: "#0A1B39",
//             },
//             value: {
//               show: true,
//               fontSize: "18px",
//               fontWeight: 700,
//               offsetY: 10,
//               color: "#0A1B39",
//             },
//             total: {
//               show: true,
//               label: "Total Patient",
//               fontSize: "14px",
//               color: "#0A1B39",
//               formatter: function (w: any) {
//                 return w.globals.seriesTotals.reduce(
//                   (a: number, b: number) => a + b,
//                   0
//                 );
//               },
//             },
//           },
//         },
//       },
//     },
//     tooltip: {
//       enabled: true,
//     },
//   });

//   const [series] = useState([219, 200, 219]);

//   return (
//     <div id="circle-chart">
//       <Chart options={chartOptions} series={series} type="donut" height={270} />
//     </div>
//   );
// };

// export default CircleChart;



// import { useMemo } from "react";
// import Chart from "react-apexcharts";
// import type { DepartmentStat } from "../../../../../api/dashboardService";

// interface CircleChartProps {
//   data: DepartmentStat[];
// }

// const CircleChart: React.FC<CircleChartProps> = ({ data }) => {
//   // Build labels and series dynamically from API data
//   const labels = useMemo(
//     () => data.map(d => `${d.count} ${d.department}`),
//     [data]
//   );

//   const series = useMemo(
//     () => data.map(d => d.count),
//     [data]
//   );

//   const chartOptions: any = {
//     chart: {
//       type: "donut",
//       height: 270,
//       width: "100%",
//     },
//     labels,
//     colors: ["#6DA6F2", "#5C60CC", "#9B51B6"],
//     legend: { show: false },
//     dataLabels: { enabled: false },
//     stroke: { width: 2, colors: ["#fff"] },
//     plotOptions: {
//       pie: {
//         donut: {
//           size: "60%",
//           labels: {
//             show: true,
//             total: {
//               show: true,
//               label: "Total Patient",
//               formatter: (w: any) =>
//                 w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0),
//             },
//           },
//         },
//       },
//     },
//     tooltip: { enabled: true },
//   };

//   return (
//     <div id="circle-chart">
//       <Chart options={chartOptions} series={series} type="donut" height={270} />
//     </div>
//   );
// };

// export default CircleChart;


import React from 'react';
import Chart from 'react-apexcharts';

interface DepartmentStat {
  department: string;
  count: number;
}

interface CircleChartProps {
  data?: DepartmentStat[];
}

const CircleChart: React.FC<CircleChartProps> = ({ data = [] }) => {
  // Extract data or use defaults
  const series = data.length > 0
    ? data.map(d => d.count)
    : [214, 150, 121];

  const labels = data.length > 0
    ? data.map(d => d.department)
    : ['Cardiology', 'Dental', 'Neurology'];

  const options: any = {
    chart: {
      type: 'donut',
      height: 250,
    },
    labels: labels,
    colors: ['#5ECFFF', '#A560F5', '#4A3AFF'],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '14px',
              fontWeight: 600,
            },
            value: {
              show: true,
              fontSize: '20px',
              fontWeight: 700,
              formatter: function (val: any) {
                return val;
              },
            },
            total: {
              show: true,
              label: 'Total Patient',
              fontSize: '14px',
              fontWeight: 500,
              color: '#6c757d',
              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0);
              },
            },
          },
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
  };

  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      height={250}
    />
  );
};

export default CircleChart;