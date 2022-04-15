import React, { useCallback, useEffect, useRef, useState } from 'react';

import Features from '../features';
import ProminentText from '../prominent-text';

import bees from './images/bees.svg';

const BeesScroll = () => {
  const sectionRef = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState();

  const [animationStartPosition, setAnimationStartPosition] = useState(0);
  const [animationEndPosition, setAnimationEndPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollDirection(scrollPosition > window.scrollY ? 'up' : 'down');
    setScrollPosition(window.pageYOffset);
  }, [scrollPosition]);

  useEffect(() => {
    if (sectionRef.current) {
      setAnimationStartPosition(sectionRef.current.offsetTop);
      setAnimationEndPosition(sectionRef.current.offsetTop + window.innerHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative h-[200vh]" ref={sectionRef}>
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <ProminentText
          text="Thanks to Parca <span>eBPF nature</span>, it operates on a Linux kernel level and provides a continuous profiling without putting pressure on your services."
          theme="orange"
          withEBPF
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            clip: `rect(0, ${
              ((scrollPosition - animationStartPosition) /
                (animationEndPosition - animationStartPosition)) *
              100
            }vw, 100vh, 0)`,
          }}
        >
          <Features />
        </div>
        <img
          className="absolute top-1/2"
          src={bees}
          alt=""
          style={{
            left: `${
              ((scrollPosition - animationStartPosition) /
                (animationEndPosition - animationStartPosition)) *
              100
            }vw`,
            transform: `translate(-50%, -50%) rotate(${scrollDirection === 'up' ? '180' : '0'}deg)`,
          }}
        />
      </div>
    </div>
  );
};

export default BeesScroll;
