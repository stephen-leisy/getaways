import React from 'react';
import Getaways from '../../containers/Getaways';
import GetawayDetail from '../../containers/GetawayDetail';
import SignUp from '../../containers/SignUp';
import Header from '../header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header className="header" />
      <Switch>
        <Route exact path="/" component={Getaways} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/:id" component={GetawayDetail} />
      </Switch>
    </Router>
  );
}
