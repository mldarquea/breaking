import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


function TemporadasBetterCallSaul() {
  const urlb = "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul"
  const [episodesb, setEpisodesb] = useState();
  const history = useHistory();
  
  useEffect(() => {
    const fetchApi = async () => {
      const responseb = await fetch(urlb);
      const responseJSONb = await responseb.json();
      setEpisodesb(responseJSONb);
    }
    fetchApi();
    }, [setEpisodesb])

  const goToPage = (episode_id) => {
    history.push(`/saul/episode/${episode_id}`);
  }

  return (
    <div className="Temporadas_Saul">
      <header className="Temporadas_Saul-header">
      <h1>Episodios Better Call Saul</h1>
      <ol>
      { !episodesb ? '\n Cargando...' : episodesb.map((episodeb, index) => {
        return (
        <div>
           <button style={{margin: '10px'}} onClick={() => goToPage(episodeb.episode_id)} key={index}>
              {episodeb.title } {episodeb.season} {episodeb.episode}
           </button>
        </div>
      )})}
      </ol>
      </header>
    </div>
  );
}

export default TemporadasBetterCallSaul;