import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import LINKS from 'constants/links';
import GithubLogo from 'icons/github.inline.svg';

import Button from '../button';

const buttons = [
  { logo: GithubLogo, text: 'Star Us', to: LINKS.github },
  { text: 'Try it Now', to: LINKS.demo },
];

const CtaButtons = ({ className, isBlackBg }) => (
  <div className={clsx('flex items-center space-x-5', className)}>
    {buttons.map(({ logo: Logo, text, to }, index) => {
      let theme = '';

      if (index === 0) {
        if (isBlackBg) {
          theme = 'white-outline';
        } else {
          theme = 'black-outline';
        }
      } else if (!isBlackBg) {
        theme = 'black-filled';
      } else {
        theme = 'white-filled';
      }

      return (
        <Button
          className={clsx('relative justify-center md:w-full sm:w-auto', Logo && 'pl-11')}
          to={to}
          theme={theme}
          size="sm"
          key={index}
        >
          {Logo && <Logo className="absolute top-1/2 left-2.5 h-6 w-auto -translate-y-1/2" />}
          <span>{text}</span>
        </Button>
      );
    })}
  </div>
);

CtaButtons.propTypes = {
  className: PropTypes.string,
  isBlackBg: PropTypes.bool,
};

CtaButtons.defaultProps = {
  className: null,
  isBlackBg: false,
};

export default CtaButtons;
