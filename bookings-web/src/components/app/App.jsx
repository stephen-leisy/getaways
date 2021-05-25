import React, { useState } from 'react';
import Home from '../../containers/Home';
import Getaways from '../../containers/Getaways';
import GetawayDetail from '../../containers/GetawayDetail';
import SignUp from '../../containers/SignUp';
import LogInContainer from '../../containers/LogInContainer';
import Header from '../header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LogOutConatainer from '../../containers/LogOutConatainer';

export default function App() {
  const [token, setToken] = useState('');
  const handleToken = (userToken) => {
    setToken(userToken);
  };
  console.log('router page', token);
  return (
    <Router>
      <Header token={token} className="header" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route
          path="/login"
          exact
          render={(routerProps) => (
            <LogInContainer
              handleToken={handleToken}
              // userToken={username}
              {...routerProps}
            />
          )}
        ></Route>
        <Route
          exact
          path="/logout"
          render={(routerProps) => (
            <LogOutConatainer handleToken={handleToken} {...routerProps} />
          )}
        ></Route>
        <Route
          exact
          path="/places"
          render={(routerProps) => <Getaways token={token} {...routerProps} />}
        ></Route>
        <Route path="/:id" component={GetawayDetail} />
      </Switch>
    </Router>
  );
}
