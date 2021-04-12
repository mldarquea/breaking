import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


function TemporadasBetterCallSaul() {
  const history = useHistory();

  const goToPage = (season) => {
    history.push(`/saul/${season}`);
  }
  const temporadas = [1,2,3,4,5,6];

  return (
    <div className="Temporadas_Better">
      <header className="Temporadas_Better">
      <h1>Temporadas Better Call Saul</h1>
      { !temporadas ? '\n Cargando...' : temporadas.map((temporada, index) => {
        return(
        <div>
           <button style={{margin: '10px'}} onClick={() => goToPage(temporada)} key={index}>
              Temporada: {temporada} 
           </button>
        </div>
      )})}
        </header>
    </div>
  );
}

export default TemporadasBetterCallSaul;