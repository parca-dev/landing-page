import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import GithubLogo from 'icons/github.inline.svg';

import Button from '../button';

const buttons = [
  { logo: GithubLogo, label: 'Star Us', url: '/', theme: 'black-outline' },
  { label: 'Try it Now', url: '/', theme: 'black-filled' },
];

const CtaButtons = ({ className }) => (
  <div className={clsx('flex items-center space-x-5', className)}>
    {buttons.map(({ logo: Logo, label, url, theme }) => (
      <Button
        className={clsx('relative justify-center md:w-full sm:w-auto', Logo && 'pl-11')}
        key={label}
        to={url}
        theme={theme}
        size="sm"
      >
        {Logo && <Logo className="absolute top-1/2 left-2.5 h-6 w-auto -translate-y-1/2" />}
        <span>{label}</span>
      </Button>
    ))}
  </div>
);

CtaButtons.propTypes = {
  className: PropTypes.string,
};

CtaButtons.defaultProps = {
  className: null,
};

export default CtaButtons;
