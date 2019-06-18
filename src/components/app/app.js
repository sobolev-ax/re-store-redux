import React from 'react';
import { Switch, Route } from 'react-router';
import ShopHeader from '../../components/shoop-header';

import {
  HomePage,
  CartPage,
} from '../pages';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/book" component={CartPage} />
        <Route render={() => (<h2>Hello World</h2>)} />
      </Switch>
    </main>
  );
};
export default App;
