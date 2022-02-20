import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

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

  const changeTracker = (tracker) => {
    if (tracker.includes !== "-") {
      tracker += `+${tracker}`;
    }
  };

  return (
    <>
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
              <td>
                {/* <img src={crypto.iconUrl} alt={crypto.name}></img> */}
                {crypto.rank}
              </td>
              <td>{crypto.name}</td>
              <td>${crypto.price.slice(0, 7)}</td>
              <td>{crypto.change}</td>
              <td>{crypto.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TopTenCrypto;
