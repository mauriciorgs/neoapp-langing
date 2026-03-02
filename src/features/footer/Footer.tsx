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

const socialLinks = [
  {
    href: 'https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software.',
    label: 'WhatsApp',
    icon: SiWhatsapp,
  },
  {
    href: 'https://www.instagram.com/neoapp_ingenieria',
    label: 'Instagram',
    icon: SiInstagram,
  },
  {
    href: 'https://www.tiktok.com/@neoappdev',
    label: 'TikTok',
    icon: SiTiktok,
  },
  {
    href: 'https://github.com/NeoApp-Ingenieria-SAS',
    label: 'GitHub',
    icon: SiGithub,
  },
];

export const Footer = () => {

  return (
    <footer className="py-12">
      {/* Main grid */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
        {/* Brand */}
        <div>
          <a href="#hero" className="block">
            <img
              src={logo}
              alt="NeoApp Ingeniería - Desarrollo de software"
              className="h-40 mb-4 mx-auto md:mx-0"
            />
          </a>
          <p className="text-sm leading-relaxed ">
            Desarrollamos soluciones de software a medida y productos
            tecnológicos que impulsan el crecimiento de tu negocio.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-5 justify-center md:justify-start">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[38px] h-[38px] rounded-[0.6rem] flex items-center justify-center bg-brand-bg text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-card hover:text-white">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className='pl-12'>
          <h3 className="text-text-main text-base font-semibold mb-4">
            Navegación
          </h3>
          <ul className="list-none p-0 space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="text-text-muted text-sm transition-colors duration-200 hover:text-text-main">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-text-main text-base font-semibold mb-4">
            Contacto
          </h3>
          <ul className="list-none p-0 space-y-3 text-sm text-text-main">
            <li>Valledupar, Cesar</li>
            <li>neoappingenieria@gmail.com</li>
            <li>
              <a
                href={socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-main transition-colors duration-200">
                +57 315 8932278
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/573238032430?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software."
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-text-main transition-colors duration-200">
                +57 323 8032430
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <ul className="list-none p-0 space-y-3 text-sm pl-12">
            <li>
              <a
                href="#"
                className="hover:text-text-main transition-colors duration-200">
                Terminos legales
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-text-main transition-colors duration-200">
                Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center justify-center text-center gap-1 px-4 text-sm pt-8">
        <p className="m-0">
          © {new Date().getFullYear()} NeoApp Ingenieria. Todos los derechos
          reservados.
        </p>
        <p className="m-0">Hecho en Colombia, hecho con el ❤️</p>
      </div>
    </footer>
  );
};
