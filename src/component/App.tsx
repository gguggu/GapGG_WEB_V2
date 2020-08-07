import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from 'pages';

const App = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => <Pages.HomePage/>}
      />
       <Route
        exact
        path='/compare/:summoner'
        render={() => <Pages.ComparePage/>}
      />
       <Route
        exact
        path='/search/:summoner'
        render={() => <Pages.SearchPage/>}
      />
       <Route
        path='/notfound'
        render={() => <Pages.NotFoundPage/>}
      />
      <Redirect to='/notfound'/>
    </Switch>
  );
}

export default App;
