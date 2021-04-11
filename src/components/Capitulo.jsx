import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

function Capitulo({match}) {
  const [item, setItem] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchItem = async () => {
      const fetchItem = await fetch(`https://tarea-1-breaking-bad.herokuapp.com/api/episodes/${match.params.episode_id}`);
      const item = await fetchItem.json();
      setItem(item);
      console.log(item);
    };
    fetchItem();
    console.log(match);
  }, [match]);

  const goToPage = (char_id) => {
    history.push(`/breaking/character/${char_id}`);
  }

  
  return (
    <div> 
      {item && item[0] && <h3>Nombre del episodio: {item[0].title}</h3>}
      {item && item[0] && <h3>Temporada: {item[0].season}</h3>}
      {item && item[0] && <h3>N° del episodio: {item[0].episode}</h3>}
      {item && item[0] && <h3>Fecha de lanzamiento: {item[0].air_date}</h3>}
      {item && item[0] && <h3>Personajes: {item[0].characters.map((character,index) => {
        // return <p>{character}</p>
        return <button style={{margin: '10px'}} onClick={() => goToPage(2)} key={index}>
        {character} 
     </button>
      })}</h3>}
    </div>
  );
}

export default Capitulo;