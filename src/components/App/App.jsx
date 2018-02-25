import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from '../Nav/NavBar/NavBar.jsx';
import AppStyles from './AppStyles.jsx'; // global styles that apply on import
import Home from '../Home/Home.jsx';
import ResultsContainer from '../Results/ResultsContainer/ResultsContainer.jsx';
import ResultsCardContainer from '../Results/ResultsCardContainer/ResultsCardContainer.jsx';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={ResultsContainer} />
        <Route exact path="/test" component={ResultsCardContainer} />
      </Switch>
    </div>
  </Router>
);

export default App;
