import styles from './Navbar.module.css';
import logo from '../../assets/images/logo-neoapp.webp';
import {
  Hammer,
  Users,
  Briefcase,
  Handshake,
  type LucideIcon,
} from 'lucide-react';

type NavItem = {
  name: string;
  path: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { name: 'Servicios', path: '#servicios', icon: Hammer },
  { name: 'Nosotros', path: '#about', icon: Users },
  { name: 'Experiencia', path: '#experiencia', icon: Briefcase },
  { name: 'Aliados', path: '#aliados', icon: Handshake },
];

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="NeoApp - soluciones tecnológicas" />
        </a>

        <ul className={styles.links}>
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <a href={item.path} className={styles.linkItem}>
                  <Icon size={18} className={styles.icon} />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software."
          className={`btn-primary ${styles.cta}`}>
          Comprar POS
        </a>
      </nav>
    </header>
  );
};
