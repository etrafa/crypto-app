import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CryptoStats from "./components/home/CryptoStats/CryptoStats";

//components
import TopTenCrypto from "./components/home/TopTenCrypto/TopTenCrypto";
import Header from "./components/navbar/Header";

function App() {
  return (
    <Router>
      <Header />
      <CryptoStats />
      <Routes>{/* <Route path="/" element={<TopTenCrypto />} /> */}</Routes>
    </Router>
  );
}

export default App;
