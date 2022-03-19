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
export default function Year() {
  const coinId = useOutletContext<string>();
  // IOhlcv는 14개가 받아져 온다.
  // 그래서 <IOhlcv[]>로 적어줌?
  const { isLoading, data } = useQuery<IOhlcv[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId, 52),
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
          type="line"
          series={[
            {
              name: "price",
              // data type :(data: IOhlcv[] | undefined)
              // undefined가 자동으로 디폴트 되니 nullish 병합 연산자(??)를 사용해줘야 한다.
              data: data?.map((price) => price.close) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 5,
            },
            xaxis: {
              type: "datetime",
              labels: {
                show: false,
              },
              categories: data?.map((price) => price.time_close) ?? [],
            },
            yaxis: {
              show: false,
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#0fbcf9"],
                stops: [0, 100],
              },
            },
            colors: ["#0be881"],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}
