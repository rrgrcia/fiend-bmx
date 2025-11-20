import { Link, useLocation } from 'react-router';

interface NavLink {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
}

export default function MobileMenu({ isOpen, navLinks }: MobileMenuProps) {
  const location = useLocation();

  return (
    <div
      className={`lg:hidden fixed inset-0 top-[88px] z-30 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-black/50" />
      <nav className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
        <div className="p-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 px-4 text-lg font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                location.pathname === link.path
                  ? 'bg-red-600 text-white'
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
