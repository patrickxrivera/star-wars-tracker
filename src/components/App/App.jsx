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
        <Route path="/results/people" component={ResultsContainer} />
        <Route path="/results/planets" component={ResultsContainer} />
        <Route path="/results/vehicles" component={ResultsContainer} />
        <Route path="/results/favorites" component={ResultsContainer} />
      </Switch>
    </div>
  </Router>
);

export default App;
