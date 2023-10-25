import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
import logoCorreios from '../components/logoCorreios.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand" style={{ marginLeft: '10px' }}>
        <img src={logoCorreios} alt="Logo Correios" width="auto" height="50" />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active"></li>
        </ul>
      </div>
      <div className="ml-auto">
        <Link to="/add-user" className="btn btn-warning" style={{ marginRight: '15px' }}>
          Adicionar Usuário
        </Link>
      </div>
      <div className="ml-auto">
        <button className="btn btn-warning" style={{ marginRight: '15px' }}>Ver encomendas</button>
      </div>
    </nav>
  );
}
