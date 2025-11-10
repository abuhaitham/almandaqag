
import React, { useState, useEffect, useRef } from 'react';
import type { Page } from '../App';
// Fix: Corrected import path for constants.
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown and mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setOpenMobileSubMenu(null);
        setIsMobileMenuOpen(false);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [openDropdown]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    e.preventDefault();
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    setOpenDropdown(null); // Close dropdown on navigation
  };

  const handleDropdownClick = (e: React.MouseEvent<HTMLButtonElement>, linkId: string) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === linkId ? null : linkId);
  };
  
  const handleMobileSubMenuClick = (linkId: string) => {
    setOpenMobileSubMenu(openMobileSubMenu === linkId ? null : linkId);
  };

  const renderNavLinks = (isMobile = false) => {
    return NAV_LINKS.map((link) => (
      <li key={link.id} className={isMobile ? 'border-b border-gray-200' : 'relative'}>
        {link.subLinks ? (
          <>
            {isMobile ? (
              <>
                <button
                  onClick={() => handleMobileSubMenuClick(link.id)}
                  className="w-full text-right px-4 py-3 flex justify-between items-center text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {link.label}
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openMobileSubMenu === link.id ? 'transform rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openMobileSubMenu === link.id && (
                  <ul className="pl-8 py-2 bg-gray-50 border-r-2 border-primary">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.id}>
                        <a
                          href={subLink.href}
                          onClick={(e) => handleNavClick(e, subLink.id)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors rounded-md mx-2"
                        >
                          {subLink.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <div className="relative" ref={openDropdown === link.id ? dropdownRef : null}>
                <button
                  onClick={(e) => handleDropdownClick(e, link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors flex items-center whitespace-nowrap ${
                    currentPage.startsWith(link.id)
                      ? 'bg-secondary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                  <svg className={`w-4 h-4 ml-1 transition-transform ${openDropdown === link.id ? 'transform rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openDropdown === link.id && (
                  <ul className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 py-1 border border-gray-200">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.id}>
                        <a
                          href={subLink.href}
                          onClick={(e) => handleNavClick(e, subLink.id)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-white transition-colors"
                        >
                          {subLink.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </>
        ) : (
          <a
            href={link.href}
            onClick={(e) => handleNavClick(e, link.id)}
            className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors whitespace-nowrap ${
              currentPage === link.id
                ? 'bg-secondary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            } ${isMobile ? 'block' : 'inline-block'}`}
          >
            {link.label}
          </a>
        )}
      </li>
    ));
  };
  

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-3 text-primary no-underline">
            <span className="text-2xl font-extrabold whitespace-nowrap">جمعية الباحة الخضراء</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center space-x-2">
              {renderNavLinks()}
            </ul>
          </nav>
          
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      <div className={`fixed top-0 right-0 h-full bg-white w-72 shadow-lg z-50 transform transition-transform lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-bold text-lg text-primary">القائمة</h2>
            <button onClick={() => setIsMobileMenuOpen(false)}>
                <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <nav className="overflow-y-auto max-h-[calc(100vh-4rem)]">
          <ul className="flex flex-col py-2">
            {renderNavLinks(true)}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
