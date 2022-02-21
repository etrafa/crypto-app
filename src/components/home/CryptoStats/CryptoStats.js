import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

//styling
import "./CryptoStats.css";

const CryptoStats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl",
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
        setData(data.data);
      });
  }, []);

  return (
    <>
      <h4 className="global-crypto-stats mt-5 pt-5">Global Crypto Stats</h4>
      <Table striped bordered hover>
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
            <td>${data.totalMarketCap}</td>
          </tr>
          <tr>
            <th>Total 24h Volume</th>
            <td>${data.total24hVolume}</td>
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
