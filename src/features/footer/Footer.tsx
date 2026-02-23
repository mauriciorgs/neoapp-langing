import styles from './Footer.module.css';
import {
  SiGithub,
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
} from '@icons-pack/react-simple-icons';
import logo from '../../assets/images/logo-neoapp-bg.webp';

const navItems = [
  { name: 'Inicio', path: '#' },
  { name: 'Servicios', path: '#servicios' },
  { name: 'Experiencia', path: '#experiencia' },
  { name: 'Nosotros', path: '#about' },
  { name: 'Aliados', path: '#aliados' },
];

export const Footer = () => {
  const wppLink =
    'https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software.';

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#hero">
            <img src={logo} alt="NeoApp Ingeniería - Desarrollo de software" />
          </a>

          <p>
            Desarrollamos soluciones de software a medida y productos
            tecnológicos que impulsan el crecimiento de tu negocio.
          </p>

          {/* Social */}
          <div className={styles.social}>
            <a
              href={wppLink}
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer">
              <SiWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/neoapp_ingenieria"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer">
              <SiInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@neoappdev"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer">
              <SiTiktok />
            </a>
            <a
              href="https://github.com/NeoApp-Ingenieria-SAS"
              aria-label="GitHub"
              target="_blank">
              <SiGithub />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <h3>Navegación</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className={styles.contact}>
          <h3>Contacto</h3>
          <ul>
            <li>Valledupar, Cesar</li>
            <li>neoappingenieria@gmail.com</li>
            <li>
              <a
                href="https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software."
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer">
                +57 315 8932278
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/573238032430?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software."
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer">
                +57 323 8032430
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.politic}>
          <ul>
            <li>
              <a href="#">Terminos legales</a>
            </li>
            <li>
              <a href="#">Privacidad</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} NeoApp Ingenieria. Todos los derechos
          reservados.
        </p>
        <p> Hecho en Colombia, hecho con el ❤️</p>
      </div>
    </footer>
  );
};
