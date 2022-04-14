import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import GithubLogo from 'icons/github.inline.svg';

import Button from '../button';

const buttons = [
  { logo: GithubLogo, label: 'Star Us', url: '/' },
  { label: 'Try it Now', url: '/' },
];

const CtaButtons = ({ className, isBlackBg }) => (
  <div className={clsx('flex items-center space-x-5', className)}>
    {buttons.map(({ logo: Logo, label, url }, index) => {
      const getTheme = () => {
        let theme = '';
        if (index === 0) {
          if (isBlackBg) {
            theme = 'white-outline';
          } else {
            theme = 'black-outline';
          }
          return theme;
        }
        if (!isBlackBg) {
          theme = 'black-filled';
        } else {
          theme = 'white-filled';
        }
        return theme;
      };
      return (
        <Button
          className={clsx('relative justify-center md:w-full sm:w-auto', Logo && 'pl-11')}
          key={label}
          to={url}
          theme={getTheme()}
          size="sm"
        >
          {Logo && <Logo className="absolute top-1/2 left-2.5 h-6 w-auto -translate-y-1/2" />}
          <span>{label}</span>
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
