import { useEffect, useState } from "react";

//import ChartJs library
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = (endpoint) => {
  const [chartData, setChartData] = useState([]);
  const [chartSettings, setChartSettings] = useState({});

  useEffect(() => {
    fetch(
      `https://coinranking1.p.rapidapi.com/coin/${endpoint}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "c0b39c4213msh5cdd2d51b2131cbp195569jsne86adf3f7408",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setChartData(data.data.coin.sparkline);
        //chart settings
        setChartSettings({
          legend: {
            display: true,
            position: "top",
            fontColor: "white",
            fontSize: 20,
            labels: {
              fontColor: "white",
              fontSize: 20,
            },
          },
          responsive: true,
          scales: {
            yAxes: [
              {
                stacked: false,
                scaleLabel: {
                  display: true,
                  fontColor: "white",
                  fontSize: 25,
                },
                ticks: {
                  fontColor: "white",
                  fontSize: 20,
                  min: 0,
                },
                gridLines: {
                  color: "white",
                },
              },
            ],
            xAxes: [
              {
                stacked: true,
                scaleLabel: {
                  display: true,
                  fontColor: "white",
                  fontSize: 25,
                },
                ticks: {
                  fontColor: "white",
                  fontSize: 20,
                  min: 0,
                },
              },
            ],
          },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const data = {
    labels: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    datasets: [
      {
        label: "Coin Chart",
        data: chartData.map((x) => x),
        backgroundColor: "#bbd9fb",
        pointBackgroundColor: "#2962ff",
        borderColor: "#2962ff",
        pointBorderColor: "#E3EAFF",
        pointHoverBackgroundColor: "#E3EAFF",
        pointHoverBorderColor: "#E3EAFF",
        fill: true,
      },
    ],
  };

  return (
    <div>
      <Line
        data={data}
        options={chartSettings}
        endpoint={endpoint}
        className="mt-5"
      />
      {console.log(endpoint)}
    </div>
  );
};

export default LineChart;
