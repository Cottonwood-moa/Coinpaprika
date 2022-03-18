import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchPriceInfo } from "../api";
import ApexChart from "react-apexcharts";
import { PriceData } from "./ICoin";

export default function Price() {
  const coinId = useOutletContext<string>();
  // IOhlcv는 14개가 받아져 온다.
  // 그래서 <IOhlcv[]>로 적어줌?
  const { isLoading, data } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchPriceInfo(coinId),
    {
      refetchInterval: 5000,
    }
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="bar"
          series={[
            {
              name: "rate of change",
              data: [
                data?.quotes.USD.percent_change_15m as number,
                data?.quotes.USD.percent_change_30m as number,
                data?.quotes.USD.percent_change_1h as number,
                data?.quotes.USD.percent_change_6h as number,
                data?.quotes.USD.percent_change_12h as number,
                data?.quotes.USD.percent_change_24h as number,
                data?.quotes.USD.percent_change_7d as number,
                data?.quotes.USD.percent_change_30d as number,
              ],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              type: "bar",
              height: "auto",
              background: "transparent",
            },
            plotOptions: {
              bar: {
                borderRadius: 10,
                dataLabels: {
                  position: "top",
                },
              },
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val + "%";
              },
              offsetY: -20,
              style: {
                fontSize: "12px",
              },
            },
            xaxis: {
              categories: ["15m", "30m", "1h", "6h", "12h", "24h", "7d", "30d"],
              position: "top",
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val + "%";
                },
              },
            },
            colors: ["#9c88ff"],
          }}
        />
      )}
    </div>
  );
}
