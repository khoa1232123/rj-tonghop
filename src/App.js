import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout';
import Error404 from './containers/Error404';
import Home from './containers/Layout/Home';
import Post from './containers/Layout/Post';
import PostForm from './containers/Layout/PostForm';
import Categories from './containers/Layout/Categories';
import Covid19 from './containers/Layout/Covid19';
import Weather from './containers/Layout/Weather';

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
                <Route path="/post/add" exact component={PostForm} />
                <Route path="/post/:id" exact component={PostForm} />
                <Route path="/covid19" exact component={Covid19} />
                <Route path="/weather" exact component={Weather} />
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
