import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";
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
  const isDark = useRecoilValue(isDarkAtom);
  // IOhlcv는 14개가 받아져 온다.
  // 그래서 <IOhlcv[]>로 적어줌?
  const { isLoading, data } = useQuery<IOhlcv[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId, 4),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <ApexChart
          type="candlestick"
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            xaxis: {
              type: "datetime",
              labels: {
                show: false,
              },
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
                      article.open.toFixed(4),
                      article.high.toFixed(4),
                      article.low.toFixed(4),
                      article.close.toFixed(4),
                    ],
                  };
                }) ?? [],
            },
          ]}
        />
      )}
    </>
  );
}
