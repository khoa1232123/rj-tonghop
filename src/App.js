import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout';
import Error404 from './containers/Error404';
import Home from './containers/Layout/Home';
import Post from './containers/Layout/Post';
import Categories from './containers/Layout/Categories';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact>
            <Layout>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/categories" exact component={Categories} />
                <Route path="/post" exact component={Post} />
              </Switch>
            </Layout>
          </Route>
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
