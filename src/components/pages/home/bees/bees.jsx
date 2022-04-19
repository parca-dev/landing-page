import React, { useCallback, useEffect, useRef, useState } from 'react';

import EBPF from '../ebpf';
import Features from '../features';

const Bees = () => {
  const sectionRef = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const [animationStartPosition, setAnimationStartPosition] = useState(0);
  const [animationEndPosition, setAnimationEndPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.pageYOffset);
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      const animationStartPosition = sectionRef.current.offsetTop + 200;
      setAnimationStartPosition(animationStartPosition);
      setAnimationEndPosition(animationStartPosition + window.innerHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative h-[calc(200vh+400px)]" ref={sectionRef}>
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <EBPF />
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
      </div>
    </div>
  );
};

export default Bees;
