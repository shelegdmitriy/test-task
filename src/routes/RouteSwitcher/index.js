import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLandingPage from 'pages/landing/MainLandingPage';

const RouteSwitcher = () => (
  <Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainLandingPage} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default RouteSwitcher;
