import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import useWindowSize from 'hooks/use-window-size';

import drawBackground from './draw-background';
import ArrowSmSvg from './images/arrow-sm.inline.svg';
import Title from './title';

const arrowLineVariants = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1, transition: { duration: 0.15 } },
};

const arrowPointerVariants = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1, transition: { duration: 0.01 } },
};

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
    drawBackground({ canvasRef, width, height });
  }, [canvasRef, height, width]);

  return (
    <section
      className="safe-paddings relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black sm:justify-start"
      ref={sectionRef}
    >
      <canvas className="absolute" ref={canvasRef} />
      <div className="max-width z-10 flex flex-col sm:mx-0">
        <div className="relative">
          <Title titleControls={titleControls} backgroundControls={backgroundTitleControls} />
          <svg
            className="absolute right-32 top-[calc(100%+1.25rem)] lg:right-24 lg:top-full lg:h-auto lg:w-[600px] md:right-28 md:w-[400px] sm:hidden"
            width="823"
            height="132"
            viewBox="0 0 823 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M822 0V121H0"
              stroke="#181A1B"
              strokeWidth="20"
              initial="initial"
              variants={arrowPointerVariants}
              animate={arrowPointerControls}
            />
            <motion.path
              d="M822 0V121H2"
              stroke="white"
              strokeWidth="2"
              initial="initial"
              variants={arrowLineVariants}
              animate={arrowLineControls}
            />
            <motion.path
              d="M14 111.5L2 121L14 130.5"
              stroke="white"
              strokeWidth="2"
              initial="initial"
              variants={arrowPointerVariants}
              animate={arrowPointerControls}
            />
          </svg>
          <ArrowSmSvg className="absolute left-48 top-[calc(100%-1.5rem)] hidden w-[150px] sm:block xs:w-[110px]" />
        </div>
        <div className="mt-24 self-start bg-black p-2.5 lg:mt-[50px] md:mt-5 sm:mt-16 sm:px-4 xs:mt-8">
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
