import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


function TemporadasBreaking() {
  const history = useHistory();

  const goToPage = (season) => {
    history.push(`/breaking/${season}`);
  }
  const temporadas = [1,2,3,4,5];

  return (
    <div className="Temporadas_Breaking">
      <header className="Temporadas_Breaking-header">
      <h1>Temporadas Breaking Bad</h1>
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

export default TemporadasBreaking;