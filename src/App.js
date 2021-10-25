import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ErrorHandler } from './utils/context';
import Modal from './sharedComponents/Modal';

import routes from './utils/routes';

const App = () => {
  const [error, setError] = useState('');

  return (
    <ErrorHandler.Provider value={setError}>
      <Router>
        <Switch>
          {routes.map((item) => (
            <Route key={item} exact {...item} />
          ))}
        </Switch>
      </Router>
      {error && <Modal message={error} setError={setError} />}
    </ErrorHandler.Provider>
  );
};

export default App;
