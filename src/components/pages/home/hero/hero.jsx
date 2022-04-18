import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import useWindowSize from 'hooks/use-window-size';

import Arrow from './arrow';
import drawBackground from './draw-background';
import Title from './title';

async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const buttonGradientVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [1, 0, 0, 0, 0.5, 1],
    transition: {
      duration: 0.18,
    },
  },
};

const buttonTextColorVariants = {
  initial: {
    opacity: 1,
    color: '#181A1B',
  },
  animate: {
    opacity: [1, 0, 0, 0, 0.5, 1],
    color: '#fff',
    transition: {
      duration: 0.18,
    },
  },
};

const Hero = () => {
  const canvasRef = useRef();
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
  });
  const { width, height } = useWindowSize();
  const titleControls = useAnimation();
  const backgroundTitleControls = useAnimation();
  const arrowLineControls = useAnimation();
  const arrowPointerControls = useAnimation();
  const buttonGradientControls = useAnimation();
  const buttonTextColorControls = useAnimation();

  useEffect(() => {
    const fn = async () => {
      if (inView) {
        await delay(1500);
        await Promise.all([
          titleControls.start('animate'),
          backgroundTitleControls.start('animate'),
        ]);
        await arrowLineControls.start('animate');
        await arrowPointerControls.start('animate');
        await Promise.all([
          buttonGradientControls.start('animate'),
          buttonTextColorControls.start('animate'),
        ]);
      }
    };
    fn();
  }, [
    titleControls,
    backgroundTitleControls,
    arrowLineControls,
    arrowPointerControls,
    buttonGradientControls,
    buttonTextColorControls,
    inView,
  ]);

  useEffect(() => {
    if (inView) {
      drawBackground({ canvasRef, width, height });
    }
  }, [canvasRef, height, inView, width]);

  return (
    <section
      className="safe-paddings relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black sm:justify-start"
      ref={sectionRef}
    >
      <canvas className="absolute" ref={canvasRef} />
      <div className="max-width z-10 flex flex-col sm:mx-0">
        <div className="relative">
          <Title titleControls={titleControls} backgroundControls={backgroundTitleControls} />
          <Arrow
            arrowLineControls={arrowLineControls}
            arrowPointerControls={arrowPointerControls}
          />
        </div>
        <div className="mt-24 self-start bg-black p-2.5 lg:mt-[50px] md:mt-5 sm:mt-16 sm:px-4 xs:mt-8 xs:pr-1.5">
          <motion.a
            className="relative inline-flex items-center bg-white px-[60px] py-[26px] text-[22px] font-medium leading-none transition-colors duration-200 lg:py-6 lg:px-16 lg:text-lg lg:leading-none md:py-4.5 md:px-12"
            href="#"
            initial="initial"
            animate={buttonTextColorControls}
            variants={buttonTextColorVariants}
          >
            <motion.span
              className="absolute top-0 left-0 right-0 bottom-0 h-full w-full"
              style={{
                backgroundImage: 'linear-gradient(264.04deg, #F14AFF 15.67%, #401AFF 82.95%)',
              }}
              initial="initial"
              animate={buttonGradientControls}
              variants={buttonGradientVariants}
            />
            <span className="relative">Try it Now</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
