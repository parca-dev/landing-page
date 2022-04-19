import { useAnimation } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import CPlusplus from './snippets/c-plusplus';
import Node from './snippets/node';
import Rust from './snippets/rust';

export const OPACITY_DURATION = 0.3;

const variants = {
  initial: () => ({
    opacity: 0,
  }),
  animate: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay: delay.opacity,
      duration: 0.2,
    },
  }),
};

const snippets = [
  {
    snippet: CPlusplus,
    className: 'absolute top-1/2 left-1/2 w-[57%] translate-y-[-60%] translate-x-[-65%]',
  },
  {
    snippet: Node,
    className: 'absolute top-1/2 left-1/2 w-[55%] translate-y-[-40%] translate-x-[-30%]',
  },
  {
    snippet: Rust,
    className: 'absolute top-1/2 left-1/2 w-[55%] translate-y-[-70%] translate-x-[-70%]',
  },
];

const CodeSnippets = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const snippetControls = useAnimation();
  const snippetsWithAnimationData = useMemo(() => {
    let previousDelay = 0;
    return snippets.map((item, index) => {
      if (index !== 0) previousDelay += OPACITY_DURATION;

      const newItem = {
        ...item,
        delay: {
          opacity: previousDelay,
        },
      };

      return newItem;
    });
  }, []);

  console.log(snippetsWithAnimationData);
  useEffect(() => {
    if (inView) {
      snippetControls.start('animate');
    }
  }, [inView, snippetControls]);
  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {snippetsWithAnimationData.map(({ snippet: Snippet, className, delay }, index) => (
        <Snippet
          className={className}
          key={index}
          controls={snippetControls}
          delay={delay}
          variants={variants}
        />
      ))}
    </div>
  );
};

CodeSnippets.propTypes = {};

CodeSnippets.defaultProps = {};

export default CodeSnippets;
