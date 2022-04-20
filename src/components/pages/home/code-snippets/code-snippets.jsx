import { useAnimation } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

// import frame1 from './images/frame.svg'
import CPlusplus from './snippets/c-plusplus';
import CPlusplusInactive from './snippets/c-plusplus-inactive';
import Node from './snippets/node';
import NodeInactive from './snippets/node-inactive';
// import Rust from './snippets/rust';
const OPACITY_DURATION = 0.2;

// const activeVariants = {
//   initial: () => ({
//     opacity: 0,
//   }),
//   animate: ({ delay }) => ({
//     opacity: 1,
//     transition: {
//       delay: delay.opacity,
//       // duration: 0.1,
//     },
//   }),
//   exit: () => ({
//     opacity: 0,
//   }),
// };

// const inactiveVariants = {
//   initial: () => ({
//     opacity: 0,
//   }),
//   animate: ({ delay }) => ({
//     opacity: 1,
//     transition: {
//       delay: delay.opacity,
//       // duration: 0.2,
//     },
//   }),
// };

const snippets = [
  {
    active: {
      snippet: CPlusplus,
      className: 'absolute top-1/2 left-1/2 w-[57%] translate-y-[-60%] translate-x-[-69.5%]',
    },
    inactive: {
      snippet: CPlusplusInactive,
      className: 'absolute top-1/2 left-1/2 w-[50%] translate-y-[-60%] translate-x-[-65.3%]',
    },
  },
  {
    active: {
      snippet: Node,
      className: 'absolute top-1/2 left-1/2 w-[54%] translate-y-[-40%] translate-x-[-25%]',
    },
    inactive: {
      snippet: NodeInactive,
      className: 'absolute top-1/2 left-1/2 w-[46%] translate-y-[-40%] translate-x-[-30%]',
    },
  },
  // {
  //   snippet: Rust,
  //   className: 'absolute top-1/2 left-1/2 w-[55%] translate-y-[-70%] translate-x-[-70%]',
  // },
];

const CodeSnippets = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const snippetControls = useAnimation();
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

  console.log(snippetsWithAnimationData);
  useEffect(() => {
    const fn = async () => {
      if (inView) {
        await snippetControls.start('animate');
        await snippetControls.start('exit');
      }
    };
    fn();
  }, [inView, snippetControls]);
  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* {snippetsWithAnimationData.map(({ active, inactive }, index) => {
        const ActiveSnippet = active.snippet;
        const InactiveSnippet = inactive.snippet;
        return (
          <Fragment key={index}>
            <ActiveSnippet {...active} controls={snippetControls} variants={activeVariants} />
            <InactiveSnippet {...inactive} controls={snippetControls} variants={inactiveVariants} />
          </Fragment>
        );
      })} */}
      <img
        className="w-full"
        src="data:image/svg+xml;charset=utf-8,%3Csvg width='1731' height='857' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
        alt=""
        aria-hidden="true"
      />
      <CPlusplus className="absolute left-0 top-0 h-full w-full" />
      {/* <embed className="absolute top-0 left-0 h-full w-full" src={frame1} alt="" /> */}
    </div>
  );
};

CodeSnippets.propTypes = {};

CodeSnippets.defaultProps = {};

export default CodeSnippets;
