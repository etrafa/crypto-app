import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Header from "./components/navbar/Header";
import Home from "./components/home/Home";
import CryptoCurrencies from "./components/cryptocurrencies/CryptoCurrencies";
import Exchanges from "./components/exchanges/Exchanges";
import News from "./components/news/News";
import Coins from "./pages/Coins";
import Footer from "./components/footer/Footer";
import Chart from "./components/chart/Chart";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="news" element={<News />} />
        <Route path="/crypto/:uuid" element={<Coins />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
