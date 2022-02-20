import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

//styling
import "./TopTenCrypto.css";

const TopTenCrypto = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=20&offset=0",
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
        setData(data.data.coins);
      });
  }, []);

  return (
    <>
      <h4 className="global-crypto-stats">Popular Coins</h4>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>24H</th>
            <th>CAP</th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto) => (
            <tr key={crypto.name}>
              <td>{crypto.rank}</td>
              <td>
                <img src={crypto.iconUrl} className="coin-icon" />
                <Link to={crypto.name}>{crypto.name}</Link>
              </td>
              <td>${crypto.price.slice(0, 7)}</td>
              <td>{crypto.change}</td>
              <td>{crypto.marketCap.slice(0, 5)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TopTenCrypto;
