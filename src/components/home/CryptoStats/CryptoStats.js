import { useState, useEffect } from "react";

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
        console.log(data);
        setData(data.data);
      });
  }, []);

  return (
    <div>
      <div>
        <p>Total Coins</p>
        <span>{data.totalCoins}</span>
      </div>
      <div>
        <p>Total Exchanges</p>
        <span>{data.totalExchanges}</span>
      </div>
      <div>
        <p>Total Market Cap</p>
        <span>{data.totalMarketCap}</span>
      </div>
      <div>
        <p>Total 24h Volume</p>
        <span>{data.total24hVolume}</span>
      </div>
      <div>
        <p>Total Market</p>
        <span>{data.totalMarkets}</span>
      </div>
    </div>
  );
};

export default CryptoStats;
