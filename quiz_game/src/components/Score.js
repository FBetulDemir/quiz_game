import { CoinFlip } from "./CoinFlip";

const Score = ({ score }) => {
  return (
    <div>
      <h2>Results</h2>
      <h4>Your score:{score}</h4>
      <CoinFlip />
    </div>
  );
};

export default Score;
