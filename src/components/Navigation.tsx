import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const Navigation = () => {
  const location = useLocation();
  const { items } = useCart();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const isScrolled = location.pathname !== '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            <img
              src="/segu.jpg"
              alt="Segullah Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-white">SEGULLAH</div>
              <div className="text-xs text-orange-500 font-normal">
                Building Brands To Prosper
              </div>
            </div>
          </Link>

          <div className="flex space-x-2 sm:space-x-4 md:space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs sm:text-sm font-medium transition-colors duration-200 hover:text-orange-500 ${
                  location.pathname === item.path ? 'text-orange-500' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/cart"
              className="relative text-white hover:text-orange-500 transition-colors duration-200"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
