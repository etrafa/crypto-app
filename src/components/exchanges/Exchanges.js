import { useEffect } from "react";

const Exchanges = () => {
  useEffect(() => {
    fetch(
      "https://coinranking1.p.rapidapi.com/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc",
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
      });
  }, []);

  return <div>Exchanges</div>;
};

export default Exchanges;
