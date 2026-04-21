import { Link } from 'react-router-dom';

export default function Button({ to, children, variant = 'primary' }) {
  if (to) {
    return (
      <Link className={`button ${variant}`} to={to}>
        {children}
      </Link>
    );
  }

  return <button className={`button ${variant}`}>{children}</button>;
}
