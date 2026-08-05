import { Link, NavLink } from 'react-router-dom';
import logoUnioeste from '../../public/logo_unioeste.png';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-content">
        <Link to="/" className="brand">
          <div className="brand-mark">
            <img src={logoUnioeste} alt="Logo da Unioeste" />
          </div>
        </Link>

        <nav className="main-nav">
          <NavLink to="/curso"><strong>Curso</strong></NavLink>
          <NavLink to="/sobre"><strong>Sobre</strong></NavLink>
          <a href="#contato"><strong>Contato</strong></a>
        </nav>
      </div>
    </header>
  );
}
