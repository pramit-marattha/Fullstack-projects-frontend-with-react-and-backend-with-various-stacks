import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navbar';
import RepoSearch from './pages/RepoSearch/RepoSearch';
import TakeNote from './pages/TakeNote/TakeNote';


const App = () => {
  return (
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact component={RepoSearch} />
        <Route path="/note" exact component={TakeNote} />
      </BrowserRouter>
  );
};

export default App;

