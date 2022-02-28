import { useState, useEffect } from "react";
import { Button, Card, Row, Container, Col } from "react-bootstrap";

//styling
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://bing-news-search1.p.rapidapi.com/news/search?q=CryptoCurrency&freshness=Day&textFormat=Raw&safeSearch=Off",
      {
        method: "GET",
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key":
            "c0b39c4213msh5cdd2d51b2131cbp195569jsne86adf3f7408",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.value);

        setNews(data.value);
      });
  }, []);

  return (
    <>
      <Container>
        <Row>
          <h4 className="text-center fs-2 fw-bold mb-4 mt-4 pb-3 text-muted">
            News
          </h4>
        </Row>
        <Row className="gx-5 gy-5 mx-auto">
          {news.map((news, index) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <Card className="w-100 h-100">
                  <Card.Img
                    className="img-thumbnail"
                    variant="top"
                    src={news?.image?.thumbnail?.contentUrl}
                  />
                  <Card.Body className="position-relative">
                    <Card.Title>{news.name}</Card.Title>
                    <Card.Text>
                      {news.description.slice(0, 80) + "..."}
                    </Card.Text>
                    <p className=" fw-bold">Source: {news.provider[0].name}</p>
                    <a href={news.url} target="_blank">
                      <Button
                        className="w-100 position-absolute top-100 start-50 translate-middle"
                        variant="secondary"
                      >
                        Read Article
                      </Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default News;
