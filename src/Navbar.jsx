import React from 'react';
import { useHistory } from "react-router-dom";

function Navbar() {
    const history = useHistory();

    const goHome = () => {
        history.push('/');
    }

    const goSearch = (char_id) => {
        history.push(`/character/${char_id}`);
    }
    return (
      <div>
        <button onClick={() => goHome()}>Home Tarea 1 Integración</button>
        <form>
          <label>
            Personajes por nombre......          
            <input type="text" name="name" />
          </label>
          <button onClick={() => goSearch()}>Buscar</button>
        </form>
      </div>
    );
  }
  
  export default Navbar;
