import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import ListPage from './pages/ListPage';

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-3">Tasks List</h1>
      <Switch>
        <Route path='/'>
          <ListPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;