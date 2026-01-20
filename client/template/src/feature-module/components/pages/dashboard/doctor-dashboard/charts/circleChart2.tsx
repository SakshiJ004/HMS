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

// import { useEffect, useState } from "react";
// import Chart from "react-apexcharts";

// interface CircleChart2Props {
//   data?: {
//     completed: number;
//     pending: number;
//     cancelled: number;
//   };
// }

// const CircleChart2 = ({ data }: CircleChart2Props) => {
//   const [chartOptions, setChartOptions] = useState<any>({});
//   const [series, setSeries] = useState<number[]>([260, 21, 50]);

//   useEffect(() => {
//     if (data) {
//       setSeries([data.completed, data.pending, data.cancelled]);
//     }

//     setChartOptions({
//       chart: {
//         type: "donut",
//         height: 250,
//       },
//       labels: ["Completed", "Pending", "Cancelled"],
//       colors: ["#10D876", "#FFC107", "#FF4B4B"],
//       legend: {
//         show: false,
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       plotOptions: {
//         pie: {
//           donut: {
//             size: "70%",
//           },
//         },
//       },
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             chart: {
//               height: 200,
//             },
//           },
//         },
//       ],
//     });
//   }, [data]);

//   return (
//     <Chart
//       options={chartOptions}
//       series={series}
//       type="donut"
//       height={250}
//     />
//   );
// };

// export default CircleChart2;


// import { useEffect, useState } from "react";
// import Chart from "react-apexcharts";

// interface CircleChartProps {
//   data: Array<{ department: string; count: number }>;
// }

// const CircleChart = ({ data }: CircleChartProps) => {
//   console.log('CircleChart received data:', data)
//   // Calculate total from real data
//   const total = data && data.length > 0
//     ? data.reduce((sum, item) => sum + item.count, 0)
//     : 0;

//     console.log('CircleChart calculated total:', total)

//   // Calculate percentages for the chart
//   const series = data && data.length > 0
//     ? data.map(item => item.count)
//     : [0];

//   const chartOptions = {
//     chart: {
//       type: "donut" as const,
//       height: 280,
//     },
//     labels: data && data.length > 0
//       ? data.map(item => item.department)
//       : ['No Data'],
//     colors: ["#5E63FF", "#AB47BC", "#29B6F6"],
//     legend: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     plotOptions: {
//       pie: {
//         donut: {
//           size: "70%",
//           labels: {
//             show: true,
//             name: {
//               show: true,
//               fontSize: '14px',
//               color: '#6B7280',
//             },
//             value: {
//               show: true,
//               fontSize: '24px',
//               fontWeight: 'bold',
//               color: '#111827',
//               formatter: function () {
//                 return total.toString();
//               }
//             },
//             total: {
//               show: true,
//               label: 'Total Patient',
//               fontSize: '14px',
//               color: '#6B7280',
//               formatter: function () {
//                 return total.toString();
//               }
//             }
//           }
//         },
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             height: 200,
//           },
//         },
//       },
//     ],
//   };

//   return (
//     <Chart
//       options={chartOptions}
//       series={series}
//       type="donut"
//       height={280}
//     />
//   );
// };

// export default CircleChart;






import Chart from "react-apexcharts";

interface CircleChart2Props {
  data: {
    completed: number;
    pending: number;
    cancelled: number;
  };
}

const CircleChart2 = ({ data }: CircleChart2Props) => {
  console.log('CircleChart2 received data:', data);

  // ✅ Calculate total from appointment statistics
  const total = (data?.completed || 0) + (data?.pending || 0) + (data?.cancelled || 0);

  console.log('CircleChart2 calculated total:', total);

  // ✅ Series for the chart
  const series = total > 0
    ? [data.completed || 0, data.pending || 0, data.cancelled || 0]
    : [0];

  const chartOptions = {
    chart: {
      type: "donut" as const,
      height: 280,
    },
    // ✅ Labels for appointment statuses
    labels: total > 0
      ? ['Completed', 'Pending', 'Cancelled']
      : ['No Data'],
    // ✅ Colors matching your design
    colors: ["#28a745", "#ffc107", "#dc3545"], // Green, Yellow, Red
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
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '14px',
              color: '#6B7280',
            },
            value: {
              show: true,
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#111827',
              formatter: function () {
                return total.toString();
              }
            },
            total: {
              show: true,
              label: 'Total Appointments', // ✅ Changed label
              fontSize: '14px',
              color: '#6B7280',
              formatter: function () {
                return total.toString();
              }
            }
          }
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
      options={chartOptions}
      series={series}
      type="donut"
      height={280}
    />
  );
};

export default CircleChart2;