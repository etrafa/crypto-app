import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

//import ChartJs library
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = (endpoint) => {
  const [chartData, setChartData] = useState([]);
  const [chartSettings, setChartSettings] = useState({});

  const coinPriceData = [];
  const coinTimeStamp = [];

  useEffect(() => {
    fetch(
      `https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=1y`,
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
        console.log(data);
        setChartData(data);
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
                ticks: {
                  beginAtZero: true,
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
        label: "Price in USD",
        // data: chartData.map((x) => x),
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        fill: false,
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
    </div>
  );
};

export default LineChart;
