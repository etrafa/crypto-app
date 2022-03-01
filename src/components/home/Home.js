//components
import CryptoStats from "./CryptoStats/CryptoStats";
import TopTenCrypto from "./TopTenCrypto/TopTenCrypto";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet title="Cryptocurrency Prices, Charts and Market Capitalizations..." />
      <CryptoStats />
      <TopTenCrypto />
    </div>
  );
};

export default Home;
