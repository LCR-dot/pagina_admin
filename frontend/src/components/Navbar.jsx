function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-4">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          Página de Administración
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ciudades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Configuración
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
