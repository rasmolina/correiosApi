import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import AddUser from './AddUser'; 

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/add-user" component={AddUser} /> {/* Defina a rota para AddUser */}
        {/* Outras rotas podem ser definidas aqui */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
