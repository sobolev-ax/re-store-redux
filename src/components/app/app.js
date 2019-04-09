import React from 'react';
import { Switch, Route } from 'react-router'

import {
  HomePage,
  CartPage,
} from '../pages';

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/book" component={CartPage} />
        <Route render={() => (<h2>Hello World</h2>)} />
      </Switch>
    </React.Fragment>
  );
};
export default App;
