import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchChartData } from "../apit";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistrocial {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistrocial[]>(["ohlcv", coinId], () => fetchChartData(coinId));

  const chartData = data?.map((point) => ({
    x: new Date(point.time_close * 1000),
    y: [parseFloat(point.open), parseFloat(point.high), parseFloat(point.low), parseFloat(point.close)],
  }));

  const options = {
    chart: {
      height: 500,
      type: "candlestick",
    },
    xaxis: {
        type: "datetime",
        labels: {
          show: true,
          datetimeUTC: false,
        },
      },
      yaxis: {
        labels: {
          show: true,
          formatter: (value: number) => value.toFixed(2), // Format y-axis labels to two decimal places
        },
      },
    tooltip: {
      enabled: false, // Enable tooltips
      y: {
        formatter: (value: number) => `$${value.toFixed(2)}`, // Format tooltip values as dollar values
      },
    },
  };


  return (
    <div>
      {isLoading ? "Loading Chart..." : (
        <ReactApexChart
          type="candlestick"
          series={[{ data: chartData }]}
          options={options}
          height={500}
        />
      )}
    </div>
  );
}

export default Chart;
