import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import millify from "millify";
import numeral from "numeral";

//styling
import "./CryptoStats.css";

const CryptoStats = () => {
  const [data, setData] = useState([]);
  const apiKey = "c0b39c4213msh5cdd2d51b2131cbp195569jsne86adf3f7408";

  useEffect(() => {
    fetch(
      "https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl",
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
        setData(data.data);
      });
  }, []);

  return (
    <>
      <h4 className="text-center fs-2 fw-bold mb-4 mt-5 pt-5 pb-3 text-muted">
        Global Crypto Stats
      </h4>
      <Table striped bordered hover className="w-25 text-center mx-auto">
        <tbody>
          <tr>
            <th>Total Coins</th>
            <td>{data.totalCoins}</td>
          </tr>
          <tr>
            <th>Total Exchanges</th>
            <td>{data.totalExchanges}</td>
          </tr>
          <tr>
            <th>Total Market Cap</th>
            <td>
              {numeral(data.totalMarketCap).format("($ 0.0 a)").toUpperCase()}
            </td>
          </tr>
          <tr>
            <th>Total 24h Volume</th>
            <td>
              {numeral(data.total24hVolume).format("($ 0.0 a)").toUpperCase()}
            </td>
          </tr>
          <tr>
            <th>Total Market</th>
            <td>{data.totalMarkets}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default CryptoStats;
