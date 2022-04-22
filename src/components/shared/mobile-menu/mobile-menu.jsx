import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import GithubLogo from 'icons/github.inline.svg';

import Button from '../button';

const ANIMATION_DURATION = 0.2;

const variants = {
  from: {
    opacity: 0,
    translateY: -10,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 40,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const buttons = [
  { logo: GithubLogo, text: 'Star Us', to: LINKS.github, theme: 'black-outline' },
  { text: 'Try it Now', to: LINKS.demo, theme: 'black-filled' },
];

const MobileMenu = ({ isOpen }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start('to');
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      controls.start('from');
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen, controls]);

  return (
    <motion.nav
      className="absolute inset-0 z-[-1] hidden flex-col bg-white px-8 pt-[62px] pb-6 before:absolute before:inset-x-0 before:top-[62px] before:h-px before:w-full before:bg-gray-90 lg:flex sm:px-4"
      initial="from"
      animate={controls}
      variants={variants}
    >
      <ul className="flex flex-grow flex-col items-center justify-center space-y-11 overflow-x-hidden overflow-y-scroll text-center">
        {MENUS.mobile.map(({ text, to }, index) => (
          <li key={index}>
            <Link className="block text-xl font-medium leading-none" to={to}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col space-y-3">
        {buttons.map(({ logo: Logo, text, to, theme }, index) => (
          <Button
            className="inline-flex justify-center"
            to={to}
            key={index}
            theme={theme}
            size="sm"
          >
            {Logo && <Logo className="h-4 w-6" />}
            <span>{text}</span>
          </Button>
        ))}
      </div>
    </motion.nav>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
