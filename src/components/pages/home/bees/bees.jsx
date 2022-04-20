import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRive } from 'rive-react';

import EBPF from '../ebpf';
import Features from '../features';

const Bees = () => {
  const [sectionRefFunction, isSectionInView] = useInView();
  const sectionRef = useRef();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState();

  const [animationStartPosition, setAnimationStartPosition] = useState(0);
  const [animationEndPosition, setAnimationEndPosition] = useState(0);

  const [progressValue, setProgressValue] = useState(0);

  const [previousDispatchedEvent, setPreviousDispatchedEvent] = useState(null);

  const { RiveComponent, rive } = useRive({
    src: '/animations/pages/ebpf/bees.riv',
    stateMachines: 'State Machine',
    autoplay: false,
  });

  const handleScroll = useCallback(() => {
    setScrollDirection(scrollPosition > window.scrollY ? 'up' : 'down');
    setScrollPosition(window.pageYOffset);
  }, [scrollPosition]);

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
    if (rive) {
      if (progressValue > -5 && isSectionInView) {
        if (!rive.isPlaying) rive.play('Animation 1');
      } else {
        rive.pause();
      }
    }

    if (progressValue <= 5) {
      if (previousDispatchedEvent !== 'ebpf-bee-trigger-in-animation') {
        document.dispatchEvent(new Event('ebpf-bee-trigger-in-animation'));
        setPreviousDispatchedEvent('ebpf-bee-trigger-in-animation');
      }
    } else if (previousDispatchedEvent !== 'ebpf-bee-trigger-out-animation') {
      document.dispatchEvent(new Event('ebpf-bee-trigger-out-animation'));
      setPreviousDispatchedEvent('ebpf-bee-trigger-out-animation');
    }
  }, [progressValue, previousDispatchedEvent, isSectionInView, rive]);

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
        <RiveComponent
          className="absolute top-1/2 h-[1200px] w-[400px]"
          style={{
            left: `${progressValue}vw`,
            transform: `translate(${scrollDirection === 'up' ? -60 : -35}%, -50%)
                        rotate(${scrollDirection === 'up' ? '180' : '0'}deg)`,
          }}
        />
      </div>
    </div>
  );
};

export default Bees;
