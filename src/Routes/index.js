import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from '../containers/Admin';
import Home from '../containers/Admin/Home';
import Categories from '../containers/Admin/Categories';
import Post from '../containers/Admin/Post';
import PostForm from '../containers/Admin/PostForm';
import Covid19 from '../containers/Admin/Covid19';
import Weather from '../containers/Admin/Weather';
import Error404 from '../containers/Error404';
import Shopping from '../containers/Shopping';

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?" exact>
          <Admin>
            <Switch>
              <Route path="/admin" exact component={Home} />
              <Route path="/admin/categories" exact component={Categories} />
              <Route path="/admin/post" exact component={Post} />
              <Route path="/admin/post/add" exact component={PostForm} />
              <Route path="/admin/post/:id" exact component={PostForm} />
              <Route path="/admin/covid19" exact component={Covid19} />
              <Route path="/admin/weather" exact component={Weather} />
            </Switch>
          </Admin>
        </Route>
        <Route>
          <Route path="/shopping" exact component={Shopping} />
        </Route>
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
};

export default Routes;
