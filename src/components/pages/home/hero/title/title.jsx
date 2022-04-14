import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

export const OPACITY_DURATION = 0.05;
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
    value: 'Memory<span class="sm:hidden">.</span>',
    background: 'linear-gradient(264.04deg, #f14aff 15.67%, #401aff 82.95%)',
  },
  { value: 'CPU.', background: 'linear-gradient(267.19deg, #ffe600 4.02%, #fd6a00 73.58%)' },
  { value: 'IO.', background: 'linear-gradient(268.85deg, #57f906 -0.04%, #00ccc0 59.56%)' },
];

const itemVariants = {
  initial: () => ({
    opacity: 0,
    backgroundColor: '#fff',
  }),
  animate: ({ background, delay }) => ({
    opacity: 1,
    ...(background && { background }),
    ...textGradientStyles,

    transition: {
      opacity: {
        duration: OPACITY_DURATION,
        delay: delay.opacity,
      },
      background: { duration: BG_DURATION, delay: delay.background },
    },
  }),
  out: () => ({
    opacity: 1,
    backgroundColor: '#fff',
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
      <span className="mr-auto bg-black px-2.5 py-2.5">Track</span>
      <span className="k -my-1.5 bg-black px-2.5 text-[8.6rem] text-white lg:text-[106px] md:text-[80px] sm:inline-flex sm:flex-col sm:text-[68px] xs:text-6xl xs:leading-none">
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
      </span>
      <span className="ml-auto bg-black px-2.5 py-2.5 sm:mr-auto sm:ml-0">Bottlenecks</span>
    </h1>
  );
};
Title.propTypes = {
  titleControls: PropTypes.object.isRequired,
};

export default Title;
