import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <div className="site-shell">
      <Header />
      <main className="page-wrapper">{children}</main>
      <Footer />
    </div>
  );
}
