import logoCorreios from '../components/logoCorreios.png';

export default function Navbar() {
  const handleAddUserClick = () => {
    window.location.href = '/add-user';
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/" style={{ marginLeft: '10px' }}>
          <img src={logoCorreios} alt="Logo Correios" width="auto" height="50" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <button className="btn btn-warning" style={{ marginRight: '15px' }} onClick={handleAddUserClick}>
            Adicionar Usuário
          </button>
        </div>
        <div className="ml-auto">
          <button className="btn btn-warning" style={{ marginRight: '15px' }}>Ver encomendas</button>
        </div>
      </nav>
    </div>
  );
}
