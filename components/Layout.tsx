import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_NAME, CONTACT_INFO } from '../constants';

const Logo = () => (
  <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
    {/* Text RUBEZH - Text only version */}
    <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="32" fill="white" letterSpacing="1">РУБЕЖ</text>
    {/* Optional: Simple decorative underline using brand colors */}
    <rect x="2" y="36" width="40" height="3" fill="#007bff" />
    <rect x="44" y="36" width="80" height="3" fill="#00ccff" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
    setIsAboutOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-brand-dark text-white sticky top-0 z-50 shadow-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/">
                <Logo />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-brand-blue text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
              >
                Главная
              </NavLink>

              {/* Dropdown Wrapper */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <button 
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname.includes('about') || location.pathname.includes('vacancies') ? 'text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
                >
                  О компании
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {/* Dropdown Menu */}
                {isAboutOpen && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <NavLink 
                      to="/about" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-blue hover:text-white"
                    >
                      О нас
                    </NavLink>
                    <NavLink 
                      to="/vacancies" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-blue hover:text-white"
                    >
                      Вакансии
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink 
                to="/projects" 
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-brand-blue text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
              >
                Наши работы
              </NavLink>

              <NavLink 
                to="/equipment" 
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-brand-blue text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
              >
                Аренда спецтехники
              </NavLink>

              <NavLink 
                to="/contacts" 
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-brand-blue text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
              >
                Контакты
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Открыть меню</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark pb-4">
          <div className="px-2 pt-2 space-y-1 sm:px-3">
            <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-blue">Главная</NavLink>
            
            <div className="space-y-1">
                <button 
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-blue"
                >
                    <span>О компании</span>
                    <ChevronDown className={`h-4 w-4 transform transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAboutOpen && (
                    <div className="pl-6 space-y-1 border-l-2 border-gray-700 ml-3">
                        <NavLink to="/about" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">О нас</NavLink>
                        <NavLink to="/vacancies" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Вакансии</NavLink>
                    </div>
                )}
            </div>

            <NavLink to="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-blue">Наши работы</NavLink>
            <NavLink to="/equipment" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-blue">Аренда спецтехники</NavLink>
            <NavLink to="/contacts" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand-blue">Контакты</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
                 <Logo />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Надежный партнер в сфере строительства и аренды спецтехники с 2010 года.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="hover:text-brand-cyan transition-colors">О компании</NavLink></li>
              <li><NavLink to="/projects" className="hover:text-brand-cyan transition-colors">Объекты</NavLink></li>
              <li><NavLink to="/equipment" className="hover:text-brand-cyan transition-colors">Аренда техники</NavLink></li>
              <li><NavLink to="/vacancies" className="hover:text-brand-cyan transition-colors">Вакансии</NavLink></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-cyan mr-2 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-cyan mr-2" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-cyan mr-2" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light font-sans text-brand-dark">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};