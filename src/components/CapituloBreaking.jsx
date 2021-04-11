import { useEffect, useState } from 'react';

function CapituloBreaking({match}) {
  const [item, setItem] = useState({});

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

  
  return (
    <div> 
      {item && item[0] && <h3>{item[0].episode_id}</h3>}
      {item && item[0] && <h3>{item[0].title}</h3>}
      {item && item[0] && <h3>{item[0].season}</h3>}
      {item && item[0] && <h3>{item[0].episeode}</h3>}
      {item && item[0] && <h3>{item[0].air_date}</h3>}
      {item && item[0] && <h3>{item[0].characters.map((character) => {
        return <p>{character}</p>
      })}</h3>}
    </div>
  );
}

export default CapituloBreaking;