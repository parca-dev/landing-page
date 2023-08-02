import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import LINKS from 'constants/links';
import DiscordLogo from 'icons/discord.inline.svg';
import GithubLogo from 'icons/github.inline.svg';

import Button from '../button';

const buttons = [
  { logo: DiscordLogo, text: 'Join us on Discord', to: LINKS.discord },
  { logo: GithubLogo, text: 'Star Us', to: LINKS.github },
  { text: 'Try it Now', to: LINKS.demo, isPrimary: true },
];

const CtaButtons = ({ className, isBlackBg }) => (
  <div className={clsx('flex items-center space-x-5', className)}>
    {buttons.map(({ logo: Logo, text, to, isPrimary }, index) => {
      let theme = '';

      if (isPrimary) {
        if (isBlackBg) {
          theme = 'white-filled';
        } else {
          theme = 'black-filled';
        }
      } else if (isBlackBg) {
        theme = 'white-outline';
      } else {
        theme = 'black-outline';
      }

      return (
        <Button
          className={clsx('flex items-center justify-center')}
          to={to}
          theme={theme}
          size="sm"
          key={index}
        >
          {Logo && <Logo className="h-6 w-auto pr-3" />}
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
