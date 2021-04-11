import React from 'react';
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();

    const goToBB = () => {
        history.push('/breaking');
    }

    const goToBCS = () => {
        history.push('/saul');
    }
    return (
      <div>
        <button onClick={() => goToBB()}>Breaking Bad</button>
        <button onClick={() => goToBCS()}>Better Call Saul</button>
      </div>
    );
  }
  
  export default Home;