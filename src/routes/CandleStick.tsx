import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
interface IOhlcv {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
export default function CandleStick() {
  const coinId = useOutletContext<string>();
  const { isLoading, data } = useQuery<IOhlcv[]>(
    ["candle", coinId],
    () => fetchCoinHistory(coinId, 26),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: true,
              },
              background: "transparent",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              show: false,
              tooltip: {
                enabled: false,
              },
            },
            tooltip: {
              x: {
                show: false,
              },
            },
          }}
          series={[
            {
              data:
                data?.map((article) => {
                  return {
                    x: article.time_close,
                    y: [
                      article.open.toFixed(2),
                      article.high.toFixed(2),
                      article.low.toFixed(2),
                      article.close.toFixed(2),
                    ],
                  };
                }) ?? [],
            },
          ]}
        />
      )}
    </div>
  );
}
