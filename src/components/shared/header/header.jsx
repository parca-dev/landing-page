import PropTypes from 'prop-types';
import React from 'react';

import LogoSvg from 'images/logo.inline.svg';

import Burger from '../burger';
import CtaButtons from '../cta-buttons';
import Link from '../link';

const navigation = [
  {
    label: 'Documentation',
    url: '/',
  },
  {
    label: 'Tutorials',
    url: '/',
  },
];

// eslint-disable-next-line no-unused-vars
const Header = ({ isMobileMenuOpen, onBurgerClick }) => (
  <header className="safe-paddings absolute inset-x-0 top-0">
    <div className="flex max-w-full items-center justify-between">
      <Link className="px-5 py-4.5 lg:px-7 lg:py-3.5 sm:py-5 sm:pl-4" to="/">
        <span className="sr-only">Parca logo</span>
        <LogoSvg className="h-7 w-auto sm:h-6" />
      </Link>
      <nav className="flex items-center space-x-10 px-5 py-2.5 md:hidden">
        <ul className="flex space-x-6">
          {navigation.map(({ label, url }) => (
            <li key={label}>
              <Link size="sm" theme="black" to={url}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <CtaButtons />
      </nav>
      <div className="hidden px-5 py-2.5 md:block sm:pr-2">
        <Burger />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
};

export default Header;
