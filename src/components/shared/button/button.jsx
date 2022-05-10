import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const styles = {
  base: 'leading-none inline-flex items-center duration-200 transition-colors',
  size: {
    sm: 'text-sm h-10 px-4.5 py-[13px] font-semibold',
    '2xl':
      'text-[22px] font-semibold px-[60px] py-[26px] lg:py-6 lg:px-16 lg:text-lg lg:leading-none md:py-4.5 md:px-12',
  },
  theme: {
    'black-filled': 'relative group text-white bg-black',
    'white-filled': 'relative group text-black bg-white hover:text-white',
    'black-outline': 'text-black border-2 border-black hover:bg-black hover:text-white',
    'white-outline': 'text-white border-2 border-white hover:bg-white hover:text-black',
    'violet-gradient-filled': 'relative group text-white bg-violet-gradient',
  },
};

const Button = ({ className: additionalClassName, to, size, theme, children, ...otherProps }) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {theme === 'black-filled' ||
      theme === 'white-filled' ||
      theme === 'violet-gradient-filled' ? (
        <>
          <span className="relative z-10 inline-flex items-center">{children}</span>
          <span
            className={clsx(
              'absolute top-0 left-0 bottom-0 right-0 opacity-0 transition-opacity group-hover:opacity-100',
              (theme === 'black-filled' || theme === 'white-filled') && 'bg-violet-gradient',
              theme === 'violet-gradient-filled' && 'bg-black'
            )}
          />
        </>
      ) : (
        children
      )}
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
