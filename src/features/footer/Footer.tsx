import styles from "./Footer.module.css";

import logo from "../../assets/images/logo-neoapp-bg.webp";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href='#hero'>
            <img src={logo} alt='NeoApp ingenieria - Desarrollo de software' />
          </a>

          <p>
            Desarrollamos soluciones de software a medida y productos
            tecnológicos que impulsan el crecimiento de tu negocio.
          </p>

          {/* Social */}
          <div className={styles.social}>
            <a
              href='https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software.'
              aria-label='WhatsApp'
              target='_blank'
              rel='noopener noreferrer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9' />
                <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1' />
              </svg>
            </a>
            <a
              href='https://www.instagram.com/neoapp_ingenieria'
              aria-label='Instagram'
              target='_blank'
              rel='noopener noreferrer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8' />
                <path d='M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
                <path d='M16.5 7.5v.01' />
              </svg>
            </a>
            <a
              href='https://www.tiktok.com/@neoappdev'
              aria-label='TikTok'
              target='_blank'
              rel='noopener noreferrer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917' />
              </svg>
            </a>
            <a href='#' aria-label='GitHub'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-github'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <h3>Navegación</h3>
          <ul>
            <li>
              <a href='#hero'>Inicio</a>
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
          <h3>Contacto</h3>
          <ul>
            <li>Valledupar, Cesar</li>
            <li>neoappingenieria@gmail.com</li>
            <li>
              <a
                href='https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software.'
                aria-label='WhatsApp'
                target='_blank'
                rel='noopener noreferrer'>
                +57 315 8932278
              </a>
            </li>
            <li>
              <a
                href='https://wa.me/573238032430?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software.'
                aria-label='WhatsApp'
                target='_blank'
                rel='noopener noreferrer'>
                +57 323 8032430
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href='#'>Terminos legales</a>
            </li>
            <li>
              <a href='#'>Privacidad</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} NeoApp Ingenieria. Todos los derechos
          reservados. Hecho en Colombia, hecho con el ❤️
        </p>
      </div>
    </footer>
  );
};
