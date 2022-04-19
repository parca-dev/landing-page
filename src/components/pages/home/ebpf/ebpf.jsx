import React, { useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRive } from 'rive-react';

const EBPF = () => {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.5 });

  const { RiveComponent, rive } = useRive({
    src: '/animations/pages/ebpf/bee.riv',
    stateMachines: 'State Machine',
    autoplay: false,
  });

  const handleInAnimationEvent = useCallback(() => {
    if (rive) rive.play(['State Machine']);
  }, [rive]);

  const handleOutAnimationEvent = useCallback(() => {
    if (rive) {
      rive.reset();
      rive.play(['Out']);
    }
  }, [rive]);

  useEffect(() => {
    document.addEventListener('ebpf-bee-trigger-in-animation', handleInAnimationEvent);
    document.addEventListener('ebpf-bee-trigger-out-animation', handleOutAnimationEvent);

    return () => {
      document.removeEventListener('ebpf-bee-trigger-in-animation', handleInAnimationEvent);
      document.removeEventListener('ebpf-bee-trigger-out-animation', handleOutAnimationEvent);
    };
  }, [handleInAnimationEvent, handleOutAnimationEvent]);

  useEffect(() => {
    if (isSectionInView && rive && !rive.isPlaying) rive.play(['State Machine']);
  }, [isSectionInView, rive]);

  return (
    <section className="safe-paddings relative h-screen overflow-hidden" ref={sectionRef}>
      <div className="container flex h-full items-center justify-center">
        <div className="relative">
          <h2 className="heading-6xl flat-none lg:flat-breaks with-orange-gradient-text">
            Thanks to <span>eBPF's nature</span>, Parca Agent operates in Linux kernel space
            allowing it to grab exactly the data needed at low overhead.
          </h2>
        </div>
        <RiveComponent className="absolute top-[54vh] left-[53vw] h-[520px] w-[1920px]" />
      </div>
    </section>
  );
};

export default EBPF;
