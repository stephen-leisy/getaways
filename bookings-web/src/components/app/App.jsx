import React from 'react';
import Getaways from '../../containers/Getaways';
import GetawayDetail from '../../containers/GetawayDetail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Getaways} />
        <Route path="/:id" component={GetawayDetail} />
      </Switch>
    </Router>
  );
}
