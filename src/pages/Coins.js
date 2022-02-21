import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//styling
import "./Coins.css";

const Coins = () => {
  const { uuid } = useParams();
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetch(
      `https://coinranking1.p.rapidapi.com/coin/${uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
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
        setCoin(data.data.coin);
      });
  }, [uuid]);

  return (
    <Container>
      <Row className="text-center mx-auto mt-3 pt-5">
        <Col xs={2}>
          <img
            className="coin-details-icon"
            src={coin.iconUrl}
            alt={coin.name}
          />
        </Col>
        <Col xs={10} className="mt-2">
          <h1>
            {coin.name} - {`(${coin.symbol})`}
          </h1>
        </Col>
      </Row>
      <Row className="mx-auto text-center mt-5">
        <Col xs={8}>
          <strong className="display-1 fw-bolder">
            ${Math.trunc(coin.price)}
          </strong>
        </Col>
        <Col xs={1} className="mt-3">
          <span>(%{coin.change})</span>
        </Col>
      </Row>
      <Row className="mx-auto text-center mt-5">
        <Col xs={4}>
          <span className="fw-bold">${coin.marketCap}</span>
          <p className="coin-details-information">MARKET CAP</p>
        </Col>
        <Col xs={4}>
          <span className="fw-bold">{coin.marketCap}</span>
          <p className="coin-details-information">ALL TIME HIGH</p>
        </Col>
        <Col xs={4}>
          <span className="fw-bold">{coin.marketCap}</span>
          <p className="coin-details-information">24H VOL</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Coins;
