import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import SEO from 'components/shared/seo';
import { loadRobotoMonoFont } from 'utils/load-roboto-mono-font';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    loadRobotoMonoFont();
  }, []);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <>
      <SEO />
      <div className="flex min-h-screen flex-col">
        <Header isMobileMenuOpen={isMobileMenuOpen} onBurgerClick={handleHeaderBurgerClick} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
