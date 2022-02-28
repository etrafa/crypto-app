import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

// //import ChartJs library
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

//chart config
import { config } from "./chartconfig";

const LineChart = ({ uuid }) => {
  const [sparklineData, setSparklineData] = useState([]);
  const [title, setTitle] = useState("24 Hours");
  const [query, setQuery] = useState("24h");
  const [firstSlice, setFirstSlice] = useState(11);
  const [secondSlice, setSecondSlice] = useState(16);
  const sparklinePrice = [];
  const sparklineTime = [];

  //apiKey
  const apiKey = "c0b39c4213msh5cdd2d51b2131cbp195569jsne86adf3f7408";

  useEffect(() => {
    fetch(
      `https://coinranking1.p.rapidapi.com/coin/${uuid}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setSparklineData(data.data.history);
      });
  }, [query]);

  //pushing price & time data into the arrays
  {
    sparklineData.map((items) => {
      sparklinePrice.push(items.price);
      sparklineTime.push(
        new Date(items.timestamp * 1000)
          .toISOString()
          .slice(firstSlice, secondSlice)
          .replace("T", "/")
      );
    });
  }

  return (
    <div>
      <DropdownButton
        variant="secondary"
        className="mt-5 ms-5 d-grid gap-2 col-2 mx-auto"
        id="dropdown-item-button"
        title={title}
      >
        <Dropdown.Item
          as="button"
          value={"24h"}
          onClick={(e) => {
            setQuery(e.target.value);
            setTitle("24Hours");
            setFirstSlice(11);
            setSecondSlice(16);
          }}
        >
          24 Hours
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          value={"7d"}
          onClick={(e) => {
            setQuery(e.target.value);
            setTitle("7 Days");
            setFirstSlice(5);
          }}
        >
          7 Days
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          value={"30d"}
          onClick={(e) => {
            setQuery(e.target.value);
            setTitle("30 Days");
            setFirstSlice(5);
          }}
        >
          30 Days
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          value={"3m"}
          onClick={(e) => {
            setQuery(e.target.value);
            setTitle("3 Months");
            setFirstSlice(5);
            setSecondSlice(10);
          }}
        >
          3 Months
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          value={"1y"}
          onClick={(e) => {
            setQuery(e.target.value);
            setTitle("1 Year");
            setFirstSlice(0);
            setSecondSlice(10);
          }}
        >
          1 Years
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          value={"3y"}
          onClick={(e) => {
            setQuery(e.target.value);
            setTitle("3 Years");
            setFirstSlice(0);
            setSecondSlice(10);
          }}
        >
          3 Years
        </Dropdown.Item>
      </DropdownButton>
      <Line
        className="mt-5"
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
              reverse: true,
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
