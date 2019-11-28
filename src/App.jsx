import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect,
} from 'react-router-dom';
import Layout from './hoc/Layout';
import Main from './components/pages/Main';
import Profile from './components/pages/Profile';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/artists" />} />
        <Route path="/artists/:id" component={Profile} />
        <Route path="/artists" component={Main} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
