import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import LineChart from "../components/chart/LineChart";
import numeral from "numeral";

//styling
import "./Coins.css";

const Coins = () => {
  const { uuid } = useParams();
  const [coin, setCoin] = useState([]);
  const [sparkLine, setSparkLine] = useState([]);
  const apiKey = "c0b39c4213msh5cdd2d51b2131cbp195569jsne86adf3f7408";

  useEffect(() => {
    fetch(
      `https://coinranking1.p.rapidapi.com/coin/${uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
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
        setCoin(data.data.coin);
      });
  }, [uuid]);

  return (
    <Container>
      <Helmet
        title={`${coin.name} price today, ${coin.symbol} to USD live, marketcap and chart`}
      />
      <Row className="text-center mx-auto mt-5 pt-5">
        <Col xs={2}>
          <img
            className="coin-details-icon"
            src={coin.iconUrl}
            alt={coin.name}
          />
        </Col>
        <Col xs={8} className="mt-2">
          <h1>
            {coin.name} - {`(${coin.symbol})`}
          </h1>
        </Col>
      </Row>
      <Row className="mx-auto text-center mt-5">
        <Col>
          <strong className="display-1 fw-bolder">
            {numeral(coin.price).format("($ 0.000 a)").toUpperCase()}
          </strong>
          <span
            className={
              coin.change?.includes("-")
                ? "coin-negative-background"
                : "coin-positive-background"
            }
          >
            % {coin.change}
          </span>
        </Col>
      </Row>
      <Row className="mx-auto text-center mt-5">
        <Col xs={4}>
          <span className="fw-bold">
            {numeral(coin.marketCap).format("($ 00.000 a)").toUpperCase()}
          </span>
          <p className="coin-details-information">MARKET CAP</p>
        </Col>
        <Col xs={4}>
          <span className="fw-bold">
            {numeral(coin?.["allTimeHigh"]?.["price"])
              .format("($ 00.000 a)")
              .toString()}
          </span>
          <p className="coin-details-information">ALL TIME HIGH</p>
        </Col>
        <Col xs={4}>
          <span className="fw-bold">
            {numeral(coin["24hVolume"]).format("($ 00.000 a)").toUpperCase()}
          </span>
          <p className="coin-details-information">24H VOL</p>
        </Col>
      </Row>
      <LineChart uuid={uuid} />
    </Container>
  );
};

export default Coins;
