import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import millify from "millify";

//styling
import "./TopTenCrypto.css";

const TopTenCrypto = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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
                <Link to={`/crypto/${crypto.uuid}`}>{crypto.name}</Link>
              </td>
              <td>${millify(crypto.price)}</td>
              <td
                className={
                  crypto.change.includes("-")
                    ? "coin-change-negative"
                    : "coin-change-positive"
                }
              >
                %{crypto.change}
              </td>
              <td>{crypto.marketCap.slice(0, 5)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => navigate("/cryptocurrencies")}
        >
          All Coins
        </Button>
      </div>
    </>
  );
};

export default TopTenCrypto;
