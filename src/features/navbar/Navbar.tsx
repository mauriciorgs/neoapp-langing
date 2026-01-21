import styles from "./Navbar.module.css";

import logo from "../../assets/images/logo-neoapp.webp";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href='/' className={styles.logo}>
          <img
            src={logo}
            alt='NeoApp - soluciones tecnológicas'
            height={100}
            width={120}
          />
        </a>

        <ul className={styles.links}>
          <li>
            <a href='#servicios'>Servicios</a>
          </li>
          <li>
            <a href='#experiencia'>Experiencia</a>
          </li>
          <li>
            <a href='#aliados'>Aliados</a>
          </li>
          <li>
            <a href='#about'>Nosotros</a>
          </li>
        </ul>

        <a href='#' className={`btn-primary ${styles.cta}`}>
          Comprar POS
        </a>
      </nav>
    </header>
  );
};
