import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { navItems } from '../data';

const MOBILE_NAV_QUERY = '(max-width: 768px)';

function useIsMobileNav() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_NAV_QUERY).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_NAV_QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', onChange);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}

const Header = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const isMobile = useIsMobileNav();

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside (include portaled mobile menu)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isMenuOpen) return;
      const t = event.target;
      if (headerRef.current?.contains(t)) return;
      if (mobileMenuRef.current?.contains(t)) return;
      setIsMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  const handleLogoClick = () => {
    scrollToSection('home');
  };

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const navList = (
    <ul className="nav-list">
      {navItems.map((item) => (
        <li key={item.id} className="nav-item">
          <button
            type="button"
            className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
            aria-label={`Navigate to ${item.label} section`}
          >
            <span className="nav-link-text">{item.label}</span>
            <div className="nav-link-indicator" />
          </button>
        </li>
      ))}
    </ul>
  );

  const mobileMenuPortal =
    isMobile &&
    isMenuOpen &&
    typeof document !== 'undefined' &&
    createPortal(
      <div ref={mobileMenuRef} className="mobile-nav-portal">
        <div
          className="nav-overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
        <nav ref={navRef} className="nav nav-open" id="navigation-menu">
          {navList}
        </nav>
      </div>,
      document.body
    );

  return (
    <header ref={headerRef} className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div
          className="logo"
          onClick={handleLogoClick}
          onKeyDown={(e) => e.key === 'Enter' && handleLogoClick()}
          role="button"
          tabIndex={0}
        >
          <span className="logo-text">DEVESH DHOTE</span>
          <div className="logo-line" />
        </div>

        {!isMobile && (
          <nav className="nav" id="navigation-menu" aria-label="Primary">
            {navList}
          </nav>
        )}

        <button
          type="button"
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls={isMenuOpen ? 'navigation-menu' : undefined}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileMenuPortal}
    </header>
  );
};

export default Header;
