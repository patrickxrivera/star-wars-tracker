import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppStyles from './AppStyles.jsx'; // global styles that apply on import
import Home from '../Home/Home.jsx';
import ResultsContainer from '../Results/ResultsContainer/ResultsContainer.jsx';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={ResultsContainer} />
      </Switch>
    </div>
  </Router>
);

export default App;
