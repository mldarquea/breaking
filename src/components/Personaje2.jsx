import { useEffect, useState } from 'react';
import "../App.css";
import { useHistory } from "react-router-dom";

function Personaje2({match}) {
  const [item, setItem] = useState({
      img : {}
  });
  const history = useHistory();

  useEffect(() => {
    const fetchItem = async () => {
      const fetchItem = await fetch(`https://tarea-1-breaking-bad.herokuapp.com/api/characters/${match.params.char_id}`);
      const item = await fetchItem.json();
      setItem(item);
      console.log(item);
    };
    fetchItem();
    console.log(match);
  }, [match]);

  const goToPage = (char_id) => {
    history.push(`/saul/${char_id}`);
  }
  return (
    <div> 
      {item && item[0] && <h3>Nombre: {item[0].name}</h3>}
      {item && item[0] && <img className="photo" src={item[0].img} alt=""/>}
      {item && item[0] && <h3>Status: {item[0].status}</h3>}
      {item && item[0] && <h3>Apodo: {item[0].nickname}</h3>}
      {item && item[0] && <h3>Interpretado por: {item[0].portrayed}</h3>}
      {item && item[0] && <h3>Ocupación: {item[0].occupation.map((occu) => {
        return <p>{occu}</p>
      })}</h3>}
      {item && item[0] && <h3>Temporadas en las que aparece de Breaking Bad: {item[0].appearance.map((appe,index) => {
        return <button style={{margin: '10px'}} onClick={() => goToPage("")} key={index}>
        {appe} </button>
      })}</h3>}
      {item && item[0] && <h3>Temporadas en las que aparece de Better Call Saul: {item[0].better_call_saul_appearance.map((appe,index) => {
        return <button style={{margin: '10px'}} onClick={() => goToPage("")} key={index}>
        {appe} </button>
      })}</h3>}
    </div>
  );
}

export default Personaje2;