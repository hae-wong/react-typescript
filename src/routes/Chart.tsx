import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}

function Chart({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(
        { queryKey: ["ohlcv", coinId], queryFn: () => fetchCoinHistory(coinId) }
    );
    return <div>{isLoading ? (
        "Loading chart..."
    ) : (
        // "Chart"
        <ApexChart
            type="candlestick"
            series={[
                {
                    name: "StockPrice",
                    data: data?.map((price) => ({
                        x: new Date(price.time_close),
                        y: [price.open, price.high, price.low, price.close],
                    })) ?? [],
                }
            ]}
            options={{
                theme: {
                    mode: "dark"
                },
                chart: {
                    toolbar: {
                        show: false,
                    }
                },
                xaxis: {
                    type: 'datetime'
                },
            }}
        />
        // <ApexChart
        //     type="line"
        //     series={[
        //         {
        //             name: "Price",
        //             data: data?.map((price) => Number(price.close)) ?? [],
        //         },
        //     ]}
        //     options={{
        //         theme: {
        //             mode: "dark"
        //         },
        //         chart: {
        //             height: 300,
        //             width: 500,
        //             toolbar: {
        //                 show: false,
        //             },
        //             background: "transparent",
        //         },
        //         grid: {
        //             show: false,
        //         },
        //         stroke: {
        //             curve: "smooth",
        //             width: 4,
        //         },
        //         yaxis: {
        //             show: false,
        //         },
        //         xaxis: {
        //             axisBorder: {
        //                 show: false
        //             },
        //             axisTicks: {
        //                 show: false,
        //             },
        //             labels: {
        //                 show: false,
        //             },
        //             categories : data?.map((price) => Number(price.time_close)) ?? [],
        //             type: "datetime",
        //         },
        //         fill: {
        //             type: "gradient",
        //             gradient: {
        //                 gradientToColors: ["#4cd137"],
        //                 stops: [0, 100]
        //             },
        //             colors: ["#00a8ff"],
        //         },
        //         tooltip: {
        //             y : {
        //                 formatter: (value) => `$ ${value.toFixed(2)}`,
        //             },
        //         }
        //     }}
        // />
    )}</div>
}

export default Chart;