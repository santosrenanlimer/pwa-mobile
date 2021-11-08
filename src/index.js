import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import 'bootstrap/dist/css/bootstrap.css';
//import swDev from './swDev'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/layout';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact={true} component={App} />
      </Switch>
    </Layout>
  </ BrowserRouter>
  , document.getElementById('root'));

  serviceWorkerRegistration.register();
