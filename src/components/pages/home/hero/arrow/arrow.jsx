import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

const arrowLineVariants = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1, transition: { duration: 0.15 } },
};

const arrowPointerVariants = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1, transition: { duration: 0.01 } },
};

const Arrow = ({ arrowPointerControls, arrowLineControls }) => (
  <>
    <svg
      className="absolute right-32 top-[calc(100%+1.25rem)] lg:right-24 lg:top-full lg:h-auto lg:w-[600px] md:right-28 md:w-[400px] sm:hidden"
      width="823"
      height="132"
      viewBox="0 0 823 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M822 0V121H0"
        stroke="#181A1B"
        strokeWidth="20"
        initial="initial"
        variants={arrowPointerVariants}
        animate={arrowPointerControls}
      />
      <motion.path
        d="M822 0V121H2"
        stroke="white"
        strokeWidth="2"
        initial="initial"
        variants={arrowLineVariants}
        animate={arrowLineControls}
      />
      <motion.path
        d="M14 111.5L2 121L14 130.5"
        stroke="white"
        strokeWidth="2"
        initial="initial"
        variants={arrowPointerVariants}
        animate={arrowPointerControls}
      />
    </svg>

    <svg
      className="absolute left-48 top-[calc(100%-3rem)] -z-10 hidden w-[183px] sm:block xs:top-[calc(100%-4rem)] xs:w-[130px]"
      width="183"
      height="180"
      viewBox="0 0 183 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0.605713 29.0972H153.348V150.233H29.213"
        stroke="#181A1B"
        strokeWidth="58"
        initial="initial"
        variants={arrowLineVariants}
        animate={arrowLineControls}
      />
      <motion.path
        d="M0.605713 29.0972H153.606V150.097H34.1057"
        stroke="white"
        strokeWidth="2"
        initial="initial"
        variants={arrowLineVariants}
        animate={arrowLineControls}
      />
      <motion.path
        d="M43.1057 142L33.1057 150L43.1057 158"
        stroke="white"
        strokeWidth="2"
        initial="initial"
        variants={arrowPointerVariants}
        animate={arrowPointerControls}
      />
    </svg>
  </>
);

Arrow.propTypes = {
  arrowPointerControls: PropTypes.object.isRequired,
  arrowLineControls: PropTypes.object.isRequired,
};

Arrow.defaultProps = {};

export default Arrow;
