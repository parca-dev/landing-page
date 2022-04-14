import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const styles = {
  base: 'leading-none inline-flex items-center duration-200 transition-colors',
  size: {
    sm: 'text-sm h-10 px-4.5 py-[13px] font-medium ',
    '2xl':
      'text-[22px] font-medium px-[60px] py-[26px] lg:py-6 lg:px-16 lg:text-lg lg:leading-none md:py-4.5 md:px-12',
  },
  theme: {
    'black-filled': 'text-white bg-black',
    'white-filled': 'text-black bg-white',
    'black-outline': 'text-black border-2 border-black',
    'white-outline': 'text-white border-2 border-white',
    'violet-gradient-filled': 'text-white bg-violet-gradient',
  },
};

const Button = ({ className: additionalClassName, to, size, theme, children, ...otherProps }) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
};

export default Button;
