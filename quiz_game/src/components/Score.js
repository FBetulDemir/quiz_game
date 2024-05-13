import { CoinFlip } from "./CoinFlip";
import gameover from "../assets/images1.jpg"

const Score = ({score}) => {
  document.body.style.backgroundImage = `url(${gameover})`;
      return (
        <div>
            <h2>Results</h2>
            <h4>Your score:{score}</h4>
            <CoinFlip/>  
        </div>
      );
}

export default Score;
