import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import MENUS from 'constants/menus';
import LogoSvg from 'images/logo.inline.svg';

import Burger from '../burger';
import CtaButtons from '../cta-buttons';
import Link from '../link';

const Header = ({ isMobileMenuOpen, onBurgerClick }) => (
  <header className="safe-paddings absolute inset-x-0 top-0 z-50">
    <div className={clsx('flex max-w-full items-center justify-between')}>
      <Link className={clsx(' px-5 py-4.5 lg:px-7 lg:py-3.5 sm:py-5 sm:pl-4')} to="/">
        <span className="sr-only">Parca logo</span>
        <LogoSvg
          className={clsx('h-7 w-auto  sm:h-6', isMobileMenuOpen ? 'text-black' : 'text-white')}
        />
      </Link>
      <nav className={clsx('flex items-center space-x-10 px-5 py-2.5 md:hidden')}>
        <ul className="flex space-x-6">
          {MENUS.header.map(({ text, to }, index) => (
            <li key={index}>
              <Link size="sm" theme="white" to={to}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <CtaButtons isBlackBg />
      </nav>
      <div className={clsx('hidden px-5 py-2.5 md:block sm:pr-2')}>
        <Burger isToggled={isMobileMenuOpen} onClick={onBurgerClick} />
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
