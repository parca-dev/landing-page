import { useAnimation, motion } from 'framer-motion';
import React, { Fragment, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import CPlusplus from './snippets/c-plusplus';
import CPlusplusInactive from './snippets/c-plusplus-inactive';
import Node from './snippets/node';
import NodeInactive from './snippets/node-inactive';
// import Rust from './snippets/rust';
const OPACITY_DURATION = 0.3;

const activeVariants = {
  initial: () => ({
    opacity: 0,
  }),
  animate: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay: delay.opacity,
      duration: 0.01,
    },
  }),
  exit: () => ({
    opacity: 0,
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
      duration: 0.1,
    },
  }),
};

const wrapperVariants = {
  initial: {
    scale: 1.05,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 1.5,
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
];

const CodeSnippets = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const snippetControls = useAnimation();
  const wrapperControls = useAnimation();
  const snippetsWithAnimationData = useMemo(() => {
    let previousActiveDelay = 0;
    let previousInactiveDelay = 0.1;
    return snippets.map(({ active, inactive }, index) => {
      if (index !== 0) previousActiveDelay += OPACITY_DURATION;
      if (index !== 0) previousInactiveDelay += OPACITY_DURATION;

      const newItem = {
        active: {
          ...active,
          delay: {
            opacity: previousActiveDelay,
          },
        },
        inactive: {
          ...inactive,
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
        await snippetControls.start('animate');
      }
    };
    fn();
  }, [inView, snippetControls, wrapperControls]);

  console.log(snippetsWithAnimationData);
  return (
    <motion.div
      ref={ref}
      className="relative h-screen overflow-hidden"
      initial="initial"
      variants={wrapperVariants}
      animate={wrapperControls}
    >
      {snippetsWithAnimationData.map(({ active, inactive }, index) => {
        const ActiveSnippet = active.snippet;
        const InactiveSnippet = inactive.snippet;
        return (
          <Fragment key={index}>
            <ActiveSnippet
              {...active}
              controls={snippetControls}
              variants={activeVariants}
              className="absolute left-0 top-0 h-full w-full"
            />
            <InactiveSnippet
              {...inactive}
              controls={snippetControls}
              variants={inactiveVariants}
              className="absolute left-0 top-0 h-full w-full"
            />
          </Fragment>
        );
      })}
      <img
        className="w-full"
        src="data:image/svg+xml;charset=utf-8,%3Csvg width='1731' height='857' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
        alt=""
        aria-hidden="true"
      />
      {/* <CPlusplus className="absolute left-0 top-0 h-full w-full" />
      <CPlusplusInactive className="absolute left-0 top-0 h-full w-full" />
      <Node className='absolute left-0 top-0 h-full w-full'/>
      <NodeInactive className='absolute left-0 top-0 h-full w-full'/> */}
    </motion.div>
  );
};

CodeSnippets.propTypes = {};

CodeSnippets.defaultProps = {};

export default CodeSnippets;
