import React from 'react';
import Getaways from '../../containers/Getaways';
import GetawayDetail from '../../containers/GetawayDetail';
import SignUp from '../../containers/SignUp';
import LogInContainer from '../../containers/LogInContainer';
import Header from '../header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LogOutConatainer from '../../containers/LogOutConatainer';

export default function App() {
  return (
    <Router>
      <Header className="header" />
      <Switch>
        <Route exact path="/" component={Getaways} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogInContainer} />
        <Route exact path="/logout" component={LogOutConatainer} />
        <Route path="/:id" component={GetawayDetail} />
      </Switch>
    </Router>
  );
}
