import React from 'react';
import { Route } from 'react-router-dom';

import UserForm from './components/UserForm';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedFood from './components/ProtectedFood';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={UserForm} />
      <ProtectedRoute exact path="/food" component={ProtectedFood} />
    </div>
  );
}

export default App;
