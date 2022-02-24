import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button, Card, Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import millify from "millify";

//styling
import "./TopTenCrypto.css";

const TopTenCrypto = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0",
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
        console.log(data.data.coins);
      });
  }, []);

  return (
    <>
      <Container>
        <Row>
          <h4 className="text-center fs-2 fw-bold mb-4 mt-4 pb-3 text-muted">
            Popular Coins
          </h4>
        </Row>
        <Row className="gx-5 gy-5 mx-auto text-center justify-content-center">
          {data.map((crypto) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card key={crypto.name} className="w-100 h-100">
                  <Card.Img
                    variant="top"
                    className="coin-icon mx-auto pt-4"
                    src={crypto.iconUrl}
                    alt={crypto.name}
                  />
                  <Card.Body className="position-relative">
                    <Card.Title>{crypto.name}</Card.Title>
                    <Card.Text>Price: {millify(crypto.price)}</Card.Text>
                    <Card.Text>
                      Market Cap: {millify(crypto.marketCap)}
                    </Card.Text>
                    <Card.Text>
                      Daily Change:
                      <span
                        className={
                          crypto.change.includes("-")
                            ? "coin-change-negative"
                            : "coin-change-positive"
                        }
                      >
                        %{crypto.change}
                      </span>
                    </Card.Text>
                    <Link to={`/crypto/${crypto.uuid}`}>
                      <Button
                        className="w-100 position-absolute top-100 start-50 translate-middle"
                        variant="secondary"
                      >
                        Details
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col className="text-center">
            <Button variant="secondary" className="w-50 mt-5">
              See All
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopTenCrypto;
