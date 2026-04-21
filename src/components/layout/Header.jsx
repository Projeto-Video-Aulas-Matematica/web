import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-content">
        <Link to="/" className="brand">
          <div className="brand-mark">U</div>
          <div>
            <strong>Unioeste</strong>
          </div>
        </Link>

        <nav className="main-nav">
          <NavLink to="/curso">Curso</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
