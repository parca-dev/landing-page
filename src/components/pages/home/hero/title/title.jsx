import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

export const OPACITY_DURATION = 0.06;
export const BG_DURATION = 0.15;
export const BG_DELAY = 0.3;

const textGradientStyles = {
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
};

const titleItems = [
  {
    value: 'Memory.',
    background: 'linear-gradient(264.04deg, #f14aff 15.67%, #401aff 82.95%)',
  },
  { value: 'CPU.', background: 'linear-gradient(267.19deg, #ffe600 4.02%, #fd6a00 73.58%)' },
  { value: 'IO.', background: 'linear-gradient(268.85deg, #57f906 -0.04%, #00ccc0 59.56%)' },
];

const itemVariants = {
  initial: ({ background }) => ({
    opacity: 0,
    ...(background && { background }),
    ...textGradientStyles,
  }),
  animate: ({ delay }) => ({
    opacity: 1,
    background: '#fff',
    transition: {
      opacity: {
        duration: OPACITY_DURATION,
        delay: delay.opacity,
      },
      background: { duration: BG_DURATION, delay: delay.background },
    },
  }),
};

const Title = ({ titleControls }) => {
  const itemsWithAnimationData = useMemo(() => {
    let previousDelay = 0;
    return titleItems.map((item, index) => {
      if (index !== 0) previousDelay += OPACITY_DURATION;

      const newItem = {
        ...item,
        delay: {
          opacity: previousDelay,
        },
      };

      newItem.delay.background = previousDelay + BG_DELAY;
      previousDelay += BG_DELAY + BG_DURATION;

      return newItem;
    });
  }, []);

  return (
    <h1 className="flex flex-col text-[38px] font-extrabold uppercase leading-none text-white lg:text-3xl lg:leading-none md:text-2xl md:leading-none sm:text-[22px] sm:leading-none">
      <span className="relative z-10 mr-auto mb-1.5 bg-black px-2.5 py-2.5 sm:px-4">Track</span>
      <motion.span
        className="-my-1.5 space-x-5 bg-black text-[8.6rem] text-white lg:space-x-2.5 lg:text-[106px] md:text-[80px] sm:flex sm:flex-wrap sm:space-x-0 sm:px-4 sm:text-[68px] xs:text-6xl xs:leading-none"
        initial="initial"
      >
        {itemsWithAnimationData.map(({ value, background, delay }, index) => (
          <motion.span
            key={index}
            dangerouslySetInnerHTML={{ __html: value }}
            initial="initial"
            variants={itemVariants}
            animate={titleControls}
            custom={{ background, delay }}
          />
        ))}
      </motion.span>
      <span className="ml-auto mt-1.5 bg-black px-2.5 py-2.5 sm:mr-auto sm:ml-0 sm:px-4">
        Bottlenecks
      </span>
    </h1>
  );
};

Title.propTypes = {
  titleControls: PropTypes.object.isRequired,
  backgroundControls: PropTypes.object.isRequired,
};

export default Title;
