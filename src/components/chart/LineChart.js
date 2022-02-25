import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

// //import ChartJs library
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

//chart config
import { config } from "./chartconfig";

const LineChart = ({ uuid }) => {
  const [sparklineData, setSparklineData] = useState([]);
  const sparklinePrice = [];
  const sparklineTime = [];

  useEffect(() => {
    fetch(
      `https://coinranking1.p.rapidapi.com/coin/${uuid}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
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
        setSparklineData(data.data.history);
      });
  }, [uuid]);

  {
    sparklineData.map((items) => {
      sparklinePrice.push(items.price);
      sparklineTime.push(items.timestamp);
    });
  }

  return (
    <div>
      <Line
        options={config}
        data={{
          labels: sparklineTime,
          datasets: [
            {
              label: "Price in USD",
              data: sparklinePrice,
              borderColor: "rgb(75, 192, 192)",
              fill: false,
              cubicInterpolationMode: "monotone",
              tension: 0.4,
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
