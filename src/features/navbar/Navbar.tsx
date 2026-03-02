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
    <header className="fixed top-0 left-0 w-full z-3000 bg-[#02061799] backdrop-blur-md">
      <nav className="max-w-[1200px] mx-auto my-2 px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="NeoApp - soluciones tecnológicas"
            className="h-7 sm:h-10 md:h-12 transition-transform duration-300 hover:-translate-y-1"
          />
        </a>

        {/* Nav links – hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="flex items-center gap-2 text-text-main text-base font-medium transition-opacity duration-200 hover:opacity-80">
                  <Icon size={18} />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software."
          className="btn-primary text-xs px-3 py-1.5 sm:text-sm sm:px-4 sm:py-2 ml-4">
          Comprar POS
        </a>
      </nav>
    </header>
  );
};
