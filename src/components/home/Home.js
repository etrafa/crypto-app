//components
import CryptoStats from "./CryptoStats/CryptoStats";
import TopTenCrypto from "./TopTenCrypto/TopTenCrypto";

const Home = () => {
  return (
    <div>
      <CryptoStats />
      <TopTenCrypto />
    </div>
  );
};

export default Home;
