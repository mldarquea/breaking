import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import TemporadasBreaking from './TemporadasBreaking';
import TemporadasBetterCallSaul from './TemporadasBetterCallSaul';
import Capitulo from './Capitulo';
import Personaje from './Personaje';
import Capitulo2 from './Capitulo2';
import Personaje2 from './Personaje2';
import CapTempBreaking from './CapTempBreaking';
import CapTempBetter from './CapTempBetter';


function Routes() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/breaking" exact component={TemporadasBreaking}/>
          <Route path="/breaking/:season" exact component={CapTempBreaking}/>
          <Route path="/saul/:season" exact component={CapTempBetter}/>
          <Route path="/saul" exact component={TemporadasBetterCallSaul}/> 
          <Route path="/breaking/episode/:episode_id" exact component={Capitulo}/>
          <Route path="/breaking/character/:char_id" exact component={Personaje}/>
          <Route path="/saul/episode/:episode_id" exact component={Capitulo2}/>
          <Route path="/saul/character/:char_id" exact component={Personaje2}/>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;