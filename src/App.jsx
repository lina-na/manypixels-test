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
        <Route exact path="/">
          <Redirect to="/artists" />
        </Route>
        <Route path="/artists/:id">
          <Profile />
        </Route>
        <Route path="/artists">
          <Main />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default App;
