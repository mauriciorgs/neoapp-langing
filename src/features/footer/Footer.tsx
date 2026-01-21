import styles from "./Footer.module.css";

import logo from "../../assets/images/logo-neoapp.webp";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <img src={logo} alt='NeoApp logo' />
          <p>
            Desarrollamos soluciones de software a medida y productos
            tecnológicos que impulsan el crecimiento de tu negocio.
          </p>

          {/* Social */}
          <div className={styles.social}>
            <a href='#' aria-label='LinkedIn'>
              in
            </a>
            <a href='#' aria-label='Instagram'>
              ig
            </a>
            <a href='#' aria-label='WhatsApp'>
              wa
            </a>
            <a href='#' aria-label='GitHub'>
              gh
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <h4>Navegación</h4>
          <ul>
            <li>
              <a href='/'>Inicio</a>
            </li>
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
              <a href='#about'>Nostros</a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div className={styles.contact}>
          <h4>Contacto</h4>
          <ul>
            <li>Valledupar, Cesar</li>
            <li>neoappingenieria@gmail.com</li>
            <li>+57 315 8932278</li>
            <li>+57 323 8032430</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} NeoApp. Todos los derechos reservados.
          Hecho en Colombia, hecho con el ❤️
        </p>
      </div>
    </footer>
  );
};
