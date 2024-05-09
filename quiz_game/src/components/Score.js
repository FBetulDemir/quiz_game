import { Buttons } from "./Buttons";


const Score = ({score}) => {
  
      return (
        <div>
            <h2>Results</h2>
            <h4>Your score: {score}</h4>
            <Buttons/>
           
        </div>
      );
}

export default Score;
