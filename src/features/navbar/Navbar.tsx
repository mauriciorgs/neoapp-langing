import styles from './Navbar.module.css';
import logo from '../../assets/images/logo-neoapp.webp';

const navItems = [
  { name: 'Servicios', path: '#servicios' },
  { name: 'Experiencia', path: '#experiencia' },
  { name: 'Aliados', path: '#aliados' },
  { name: 'Nosotros', path: '#about' },
];

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="NeoApp - soluciones tecnológicas" />
        </a>

        <ul className={styles.links}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>

        <a href="#" className={`btn-primary ${styles.cta}`}>
          Comprar POS
        </a>
      </nav>
    </header>
  );
};
