import { useAnimation, motion } from 'framer-motion';
import React, { Fragment, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import Frame from './frame';
import CLang from './frames/c-lang';
import CLangInactive from './frames/c-lang-inactive';
import CPlusplus from './frames/c-plusplus';
import CPlusplusInactive from './frames/c-plusplus-inactive';
import Go from './frames/go';
import GoInactive from './frames/go-inactive';
import Haskell from './frames/haskell';
import Nextjs from './frames/nextjs';
import NextjsInactive from './frames/nextjs-inactive';
import Node from './frames/node';
import NodeInactive from './frames/node-inactive';
import Rust from './frames/rust';
import RustInactive from './frames/rust-inactive';

const OPACITY_DURATION = 0.2;

const activeVariants = {
  initial: () => ({
    opacity: 0,
  }),
  animate: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay: delay.opacity,
      duration: 0.5,
    },
  }),
  exit: ({ delay }) => ({
    opacity: 0,
    transition: {
      delay: delay.opacity,
    },
  }),
};

const inactiveVariants = {
  initial: () => ({
    opacity: 0,
  }),
  animate: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay: delay.opacity,
      duration: 0.5,
    },
  }),
};

const wrapperVariants = {
  initial: {
    opacity: 0,
    scale: 1.2,
  },
  animate: {
    opacity: 1,
    scale: 0.9,
    transition: {
      scale: { duration: 2.5 },
      opacity: { duration: 0.2, ease: [0.5, 0.5, 0.25, 1] },
    },
  },
};

const snippets = [
  {
    active: {
      snippet: CPlusplus,
    },
    inactive: {
      snippet: CPlusplusInactive,
    },
  },
  {
    active: {
      snippet: Node,
    },
    inactive: {
      snippet: NodeInactive,
    },
  },
  {
    active: {
      snippet: Rust,
    },
    inactive: {
      snippet: RustInactive,
    },
  },
  {
    active: {
      snippet: CLang,
    },
    inactive: {
      snippet: CLangInactive,
    },
  },
  {
    active: {
      snippet: Nextjs,
    },
    inactive: {
      snippet: NextjsInactive,
    },
  },
  {
    active: {
      snippet: Go,
    },
    inactive: {
      snippet: GoInactive,
    },
  },
  {
    active: {
      snippet: Haskell,
    },
    inactive: {
      snippet: Haskell,
    },
  },
];

const Windows = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const frameControls = useAnimation();
  const wrapperControls = useAnimation();
  const framesWithAnimationData = useMemo(() => {
    let previousActiveDelay = 0;
    let previousInactiveDelay = 0.5;
    return snippets.map(({ active, inactive }, index) => {
      if (index === 1) previousActiveDelay += 0.15;
      if (index !== 0) previousActiveDelay += OPACITY_DURATION;
      if (index === 1) previousInactiveDelay += 0;
      if (index !== 0) previousInactiveDelay += OPACITY_DURATION;

      const newItem = {
        active: {
          ...active,
          index,
          delay: {
            opacity: previousActiveDelay,
          },
        },
        inactive: {
          ...inactive,
          index,
          delay: {
            opacity: previousInactiveDelay,
          },
        },
      };

      return newItem;
    });
  }, []);

  useEffect(() => {
    if (inView) {
      wrapperControls.start('animate');
    }
    const fn = async () => {
      if (inView) {
        await frameControls.start(['animate', 'exit']);
      }
    };
    fn();
  }, [inView, frameControls, wrapperControls]);

  console.log(framesWithAnimationData);
  return (
    <motion.div
      ref={ref}
      className="relative mx-auto max-w-[1731px] overflow-hidden"
      initial="initial"
      variants={wrapperVariants}
      animate={wrapperControls}
    >
      <img
        className="w-full"
        src="data:image/svg+xml;charset=utf-8,%3Csvg width='1731' height='857' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
        alt=""
        aria-hidden="true"
      />
      {framesWithAnimationData.map(({ active, inactive }, index) => (
        <Fragment key={index}>
          <Frame controls={frameControls} {...active} variants={activeVariants} />
          {inactive && <Frame controls={frameControls} {...inactive} variants={inactiveVariants} />}
        </Fragment>
      ))}
    </motion.div>
  );
};

Windows.propTypes = {};

Windows.defaultProps = {};

export default Windows;
