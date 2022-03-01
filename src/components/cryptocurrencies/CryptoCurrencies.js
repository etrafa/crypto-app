import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import millify from "millify";
import { Helmet } from "react-helmet";

//styling

const CryptoCurrencies = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const apiKey = "c0b39c4213msh5cdd2d51b2131cbp195569jsne86adf3f7408";

  useEffect(() => {
    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0",
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
        console.log(data);
        setData(data.data.coins);
      });
  }, []);

  return (
    <>
      <Helmet title="Crpytocurrency - Live Chart" />
      <h4 className="text-center fs-2 fw-bold mb-4 mt-5 pt-5 pb-3 text-muted">
        Coins Share Live
      </h4>
      <input
        className="form-control w-50 mx-auto mb-5"
        type="text"
        placeholder="Search Cryptocurrencies..."
        aria-label="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table hover responsive className="mx-auto w-50">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>24H</th>
            <th className="table-hidden-property">CAP</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((val) => {
              if (val.name === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((crypto) => (
              <tr key={crypto.name}>
                <td>{crypto.rank}</td>
                <td>
                  <img src={crypto.iconUrl} className="coin-icon-table" />
                  <Link to={`/crypto/${crypto.uuid}`}>{crypto.name}</Link>
                </td>
                <td>${crypto.price.slice(0, 7)}</td>
                <td
                  className={
                    crypto.change.includes("-")
                      ? "coin-change-negative"
                      : "coin-change-positive"
                  }
                >
                  %{crypto.change}
                </td>
                <td className="table-hidden-property">
                  ${millify(crypto?.marketCap)}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default CryptoCurrencies;
