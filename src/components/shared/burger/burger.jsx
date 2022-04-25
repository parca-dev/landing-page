import clsx from 'clsx';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

const ANIMATION_DURATION = 0.2;

const Burger = ({ className: additionalClassName, isToggled, onClick }) => (
  <motion.button
    className={clsx(
      'relative h-10 w-10',
      additionalClassName,
      isToggled ? 'text-black' : 'text-white'
    )}
    type="button"
    animate={isToggled ? 'toggled' : 'initial'}
    onClick={onClick}
  >
    <motion.span
      className={clsx('absolute top-[11px] left-[8px] block h-0.5 w-6 rounded-full bg-current')}
      variants={{
        initial: {
          top: 11,
          display: 'block',
          transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
        },
        toggled: {
          top: 17,
          transition: { duration: ANIMATION_DURATION },
          transitionEnd: { display: 'none' },
        },
      }}
    />
    <motion.span
      className="absolute top-[19px] left-[8px] block h-0.5 w-6 rounded-full bg-current"
      variants={{
        initial: {
          display: 'block',
          transition: { delay: ANIMATION_DURATION },
        },
        toggled: {
          display: 'none',
          transition: { delay: ANIMATION_DURATION },
        },
      }}
    />
    <motion.span
      className="absolute bottom-[11px] left-[8px] block h-0.5 w-6 rounded-full bg-current"
      variants={{
        initial: {
          bottom: 11,
          display: 'block',
          transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
        },
        toggled: {
          bottom: 20,
          transition: { duration: ANIMATION_DURATION },
          transitionEnd: { display: 'none' },
        },
      }}
    />
    <motion.span
      className="absolute top-[18px] left-[8px] hidden h-0.5 w-6 rounded-full bg-current"
      variants={{
        initial: {
          rotate: '0deg',
          transition: { duration: ANIMATION_DURATION },
          transitionEnd: { display: 'none' },
        },
        toggled: {
          display: 'block',
          rotate: '45deg',
          transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
        },
      }}
    />
    <motion.span
      className="absolute top-[18px] left-[8px] hidden h-0.5 w-6 rounded-full bg-current"
      variants={{
        initial: {
          rotate: '0deg',
          transition: { duration: ANIMATION_DURATION },
          transitionEnd: { display: 'none' },
        },
        toggled: {
          display: 'block',
          rotate: '-45deg',
          transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
        },
      }}
    />
  </motion.button>
);

Burger.propTypes = {
  className: PropTypes.string,
  isToggled: PropTypes.bool,
  onClick: PropTypes.func,
};

Burger.defaultProps = {
  className: null,
  isToggled: false,
  onClick: null,
};

export default Burger;
