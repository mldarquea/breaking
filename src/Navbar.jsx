import React, { Component } from 'react';
import { BrowserRouter as Router, Link,useHistory } from "react-router-dom";
import Route from 'react-router-dom/Route';

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
  };
  export default Navbar;
  /* class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      nameb: ""
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log("Final data is", data.nameb)
  }

  handleInputChange = (event) => {
    event.preventDefault()
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
render () {
  const {nameb} = this.state
  return(
    <Router>
      <div className="App">
      <Link>Home </Link>
      </div>
    </Router>
    <div>
      <h1> Form </h1>
      <form onSubmit={this.handleSubmit}>
        <p><input type='text' placeholder= 'Búsqueda por nombre' value={nameb} name="nameb" onChange= {this.handleInputChange}/></p>
        <p><button>Send</button></p>
      </form>
    </div>
    
  )
}

}
export default Navbar; */