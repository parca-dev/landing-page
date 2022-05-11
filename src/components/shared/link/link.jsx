import clsx from 'clsx';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  base: 'inline-flex duration-200 transition-colors',
  size: {
    sm: 'text-sm font-semibold leading-none',
    '2xl':
      'text-2xl leading-none font-semibold underline-offset-4 lg:text-xl lg:leading-none sm:text-base sm:leading-none',
  },
  theme: {
    blue: 'text-blue pb-1 border-b-[3px] border-blue hover:border-b-transparent',
    black: 'text-black hover:bg-clip-text hover:text-blue',
    white: 'text-white hover:text-pink',
  },
};

const Link = ({ className: additionalClassName, size, theme, to, children, ...props }) => {
  const className = clsx(
    size && theme && styles.base,
    styles.size[size],
    styles.theme[theme],
    additionalClassName
  );

  if (to.startsWith('/')) {
    return (
      <GatsbyLink className={className} to={to} {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a className={className} href={to} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: null,
  to: null,
  size: null,
  theme: null,
};

export default Link;
