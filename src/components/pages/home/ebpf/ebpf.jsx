// TODO: Uncomment when Bees section comes back or delete if we decide to remove it
// import React, { useCallback, useEffect } from 'react';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRive } from 'rive-react';

const EBPF = () => {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.8 });

  const { RiveComponent, rive } = useRive({
    src: '/animations/pages/ebpf/bee.riv',
    stateMachines: 'State Machine',
    autoplay: false,
  });

  // TODO: Uncomment when Bees section comes back or delete if we decide to remove it
  // const handleInAnimationEvent = useCallback(() => {
  //   if (rive) rive.play(['State Machine']);
  // }, [rive]);

  // const handleOutAnimationEvent = useCallback(() => {
  //   if (rive) {
  //     rive.reset();
  //     rive.play(['Out']);
  //   }
  // }, [rive]);

  // useEffect(() => {
  //   document.addEventListener('ebpf-bee-trigger-in-animation', handleInAnimationEvent);
  //   document.addEventListener('ebpf-bee-trigger-out-animation', handleOutAnimationEvent);

  //   return () => {
  //     document.removeEventListener('ebpf-bee-trigger-in-animation', handleInAnimationEvent);
  //     document.removeEventListener('ebpf-bee-trigger-out-animation', handleOutAnimationEvent);
  //   };
  // }, [handleInAnimationEvent, handleOutAnimationEvent]);

  // useEffect(() => {
  //   if (isSectionInView && rive && !rive.isPlaying) rive.play(['State Machine']);
  // }, [isSectionInView, rive]);

  useEffect(() => {
    // Uncomment and
    // if (isSectionInView && rive && !rive.isPlaying) rive.play(['State Machine']);

    if (rive) {
      if (isSectionInView) {
        rive.play(['State Machine']);
      } else {
        rive.reset();
        rive.play(['Out']);
      }
    }
  }, [isSectionInView, rive]);

  return (
    <section
      className="safe-paddings relative overflow-hidden pt-48 pb-80 lg:pt-40 lg:pb-64 md:pb-40 sm:pt-32 sm:pb-32"
      ref={sectionRef}
    >
      <div className="container flex h-full items-center justify-center">
        <div className="relative">
          <h2 className="heading-6xl flat-none lg:flat-breaks with-orange-gradient-text">
            Thanks to <span>eBPF's nature</span>, Parca Agent operates in Linux kernel space
            allowing it to grab exactly the data needed at low overhead.
          </h2>
        </div>
        <RiveComponent className="absolute top-[53%] left-[calc(100vw_-_890px)] h-[520px] w-[1920px] xl:left-[calc(100vw_-_490px)] xl:w-[1420px] lg:top-[45%] sm:top-[55%] sm:left-[calc(100vw_-_365px)] sm:h-[300px] sm:w-[1120px] xs:top-[60%]" />
      </div>
    </section>
  );
};

export default EBPF;
