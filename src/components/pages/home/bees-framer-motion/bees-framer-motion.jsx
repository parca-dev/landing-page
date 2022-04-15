import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import Features from '../features';
import ProminentText from '../prominent-text';

import bees from './images/bees.svg';

const sectionVariants = {
  initial: {
    clip: 'rect(0, 0vw, 100vh, 0)',
  },
  goAnimate: {
    clip: 'rect(0, 100vw, 100vh, 0)',
    transition: {
      duration: 1,
    },
  },
  backAnimate: {
    clip: 'rect(0, 0vw, 100vh, 0)',
    transition: {
      duration: 1,
    },
  },
};

const beesVariants = {
  initial: { left: '0vw' },
  goAnimate: {
    left: '100vw',
    transition: {
      duration: 1,
    },
  },
  backAnimate: {
    left: '0vw',
    transition: {
      duration: 1,
    },
  },
};

const BeesFramerMotion = () => {
  const sectionRef = useRef(null);

  const controls = useAnimation();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState();

  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const [animationBreakpointPosition, setAnimationBreakpointPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollDirection(scrollPosition > window.scrollY ? 'up' : 'down');
    setScrollPosition(window.pageYOffset);
  }, [scrollPosition]);

  useEffect(() => {
    if (sectionRef.current) {
      setAnimationBreakpointPosition(sectionRef.current.offsetTop + window.innerHeight / 2);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isAnimationPlaying) return;

    if (scrollDirection === 'up' && scrollPosition <= animationBreakpointPosition) {
      controls.start('backAnimate').then(() => setIsAnimationPlaying(false));
      setIsAnimationPlaying(true);
    } else if (scrollDirection === 'down' && scrollPosition >= animationBreakpointPosition) {
      controls.start('goAnimate').then(() => setIsAnimationPlaying(false));
      setIsAnimationPlaying(true);
    }
  }, [isAnimationPlaying, scrollDirection, scrollPosition, animationBreakpointPosition, controls]);

  return (
    <div className="relative h-[200vh]" ref={sectionRef}>
      <motion.div
        className="sticky top-0 h-screen w-screen overflow-hidden"
        initial="initial"
        animate={controls}
      >
        <ProminentText
          text="Thanks to Parca <span>eBPF nature</span>, it operates on a Linux kernel level and provides a continuous profiling without putting pressure on your services."
          theme="orange"
          withEBPF
        />
        <motion.div className="absolute top-0 left-0 right-0 bottom-0" variants={sectionVariants}>
          <Features />
        </motion.div>
        <motion.img
          className={clsx(
            'absolute top-1/2 -translate-x-1/2 -translate-y-1/2',
            scrollDirection === 'up' &&
              scrollPosition <= animationBreakpointPosition &&
              'rotate-180'
          )}
          src={bees}
          alt=""
          variants={beesVariants}
        />
      </motion.div>
    </div>
  );
};

export default BeesFramerMotion;
