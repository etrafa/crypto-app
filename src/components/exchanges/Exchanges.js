import { useEffect, useState } from "react";
import { Table, ProgressBar, Button } from "react-bootstrap";
import millify from "millify";

//styling
import "./Exchange.css";

const Exchanges = () => {
  const [exchange, setExchange] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // options to show only 10 times at once. if user wants they can show more items by clicking a button.
  const [showItem, setShowItem] = useState(10);
  const [visible, setVisible] = useState(true);

  const showMoreItem = () => {
    setShowItem((prev) => prev + 10);
    if (showItem >= 90) {
      setVisible(false);
    }
  };

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/exchanges`)
      .then((response) => response.json())
      .then((data) => {
        setExchange(data);
      });
  }, []);

  return (
    <>
      <h4 className="text-center fs-2 fw-bold mb-4 mt-5 pt-5 pb-3 text-muted">
        Exchange Lists
      </h4>
      <input
        className="form-control w-50 mx-auto mb-5"
        type="text"
        placeholder="Search Exchanges..."
        aria-label="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table hover table-responsive className="mx-auto w-50 exchange-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Exchange</th>
            <th>Trust Score</th>
            <th className="table-hidden-property">24h Vol(Normalized)</th>
            <th>24h Vol</th>
            <th className="table-hidden-property">Year Established</th>
          </tr>
        </thead>
        <tbody>
          {exchange
            .slice(0, showItem)
            .filter((val) => {
              if (val === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((exchange) => (
              <tr key={exchange.name}>
                <td>{exchange.trust_score_rank}</td>
                <td>
                  <img src={exchange.image} className="coin-icon-table" />
                  <a href={exchange.url} target="_blank">
                    {exchange.name}
                  </a>
                </td>
                <td>
                  <strong>{exchange.trust_score}</strong>
                  <ProgressBar
                    className=""
                    max={10}
                    now={exchange.trust_score}
                  />
                </td>
                <td className="text-center table-hidden-property">
                  {millify(exchange?.trade_volume_24h_btc_normalized)}
                </td>
                <td>{millify(exchange?.trade_volume_24h_btc)}</td>
                <td className="table-hidden-property">
                  {exchange.year_established}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button
        onClick={showMoreItem}
        variant="success"
        // className={
        //   " mx-auto text-center w-25 d-block mt-3" + visible
        //     ? "visible"
        //     : "invisible"
        // }
        className={`mx-auto text-center w-25 d-block mt-3 ${
          visible ? "visible" : "invisible"
        }`}
      >
        Show More
      </Button>
    </>
  );
};

export default Exchanges;
