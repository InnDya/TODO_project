import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import NewList from './pages/NewList';

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Tasks List</h1>
      <NewList />
      <Switch>
        <Route path='/'>
          <ListPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;