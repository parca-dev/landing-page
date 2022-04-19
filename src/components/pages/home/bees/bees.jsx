import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import EBPF from '../ebpf';
import Features from '../features';

const Bees = () => {
  const [sectionRefFunction, isSectionInView] = useInView();
  const sectionRef = useRef();

  const [scrollPosition, setScrollPosition] = useState(0);

  const [animationStartPosition, setAnimationStartPosition] = useState(0);
  const [animationEndPosition, setAnimationEndPosition] = useState(0);

  const [progressValue, setProgressValue] = useState(0);

  const [previousDispatchedEvent, setPreviousDispatchedEvent] = useState(null);

  const handleScroll = useCallback(() => setScrollPosition(window.pageYOffset), []);

  useEffect(() => {
    if (sectionRef.current) {
      const animationStartPosition = sectionRef.current.offsetTop + 200;
      setAnimationStartPosition(animationStartPosition);
      setAnimationEndPosition(animationStartPosition + window.innerHeight);
    }
  }, [sectionRef]);

  useEffect(() => {
    setProgressValue(
      ((scrollPosition - animationStartPosition) /
        (animationEndPosition - animationStartPosition)) *
        100
    );
  }, [scrollPosition, animationStartPosition, animationEndPosition]);

  useEffect(() => {
    if (progressValue <= 70) {
      if (previousDispatchedEvent !== 'ebpf-bee-trigger-in-animation') {
        document.dispatchEvent(new Event('ebpf-bee-trigger-in-animation'));
        setPreviousDispatchedEvent('ebpf-bee-trigger-in-animation');
      }
    } else if (previousDispatchedEvent !== 'ebpf-bee-trigger-out-animation') {
      document.dispatchEvent(new Event('ebpf-bee-trigger-out-animation'));
      setPreviousDispatchedEvent('ebpf-bee-trigger-out-animation');
    }
  }, [progressValue, previousDispatchedEvent]);

  useEffect(() => {
    if (sectionRef.current) sectionRefFunction(sectionRef.current);
  }, [sectionRefFunction]);

  useEffect(() => {
    if (isSectionInView) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSectionInView, handleScroll]);

  return (
    <div className="relative h-[calc(200vh+400px)]" ref={sectionRef}>
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <EBPF />
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            clip: `rect(0, ${progressValue}vw, 100vh, 0)`,
          }}
        >
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Bees;
