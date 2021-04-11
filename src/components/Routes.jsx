import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import TemporadasBreaking from './TemporadasBreaking';
// import TemporadasBetterCallSaul from './TemporadasBetterCallSaul';
import CapituloBreaking from './CapituloBreaking';


function Routes() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/breaking" exact component={TemporadasBreaking}/>
          {/* <Route path="/saul" exact component={TemporadasBetterCallSaul}/> */}
          <Route path="/breaking/episode/:episode_id" exact component={CapituloBreaking}/>
          {/* <Route path="/saul/episode/:episode_id" exact component={CapituloSaul}/>
          <Route path="/character/:char_id" exact component={CapituloSaul}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;