import useSize from '@react-hook/size';
import { motion, useAnimation } from 'framer-motion';
import React, { useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import Link from 'components/shared/link';
import LINKS from 'constants/links';

import Arrow from './arrow';
import drawBackground from './draw-background';
import Title from './title';

const buttonGradientVariants = {
  initial: {
    opacity: 0,
  },
  animate1: {
    opacity: 1,
    transition: {
      duration: 0.03,
    },
  },
  animate2: {
    opacity: 0,
    transition: {
      duration: 0.03,
    },
  },
  animate3: {
    opacity: 1,
    transition: {
      duration: 0.06,
      delay: 0.06,
    },
  },
};

const Hero = () => {
  const ref = useRef();
  const canvasRef = useRef();
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
  });
  const [width, height] = useSize(ref);
  const titleControls = useAnimation();
  const arrowLineControls = useAnimation();
  const arrowPointerControls = useAnimation();
  const buttonGradientControls = useAnimation();

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      sectionRef(node);
    },
    [sectionRef]
  );

  useEffect(() => {
    const fn = async () => {
      if (inView) {
        await titleControls.start('animate');
        await arrowLineControls.start('animate');
        await arrowPointerControls.start('animate');
        await buttonGradientControls.start('animate1');
        await buttonGradientControls.start('animate2');
        await buttonGradientControls.start('animate3');
      }
    };
    fn();
  }, [titleControls, arrowLineControls, arrowPointerControls, buttonGradientControls, inView]);

  useEffect(() => {
    if (inView) {
      drawBackground({ canvasRef, width, height });
    }
  }, [canvasRef, height, inView, width]);

  return (
    <section
      className="safe-paddings relative flex h-screen min-h-[1024px] w-screen max-w-full items-center justify-center overflow-hidden bg-black lg:min-h-[748px] md:min-h-[557px]"
      ref={setRefs}
    >
      <canvas className="absolute inset-0" ref={canvasRef} />
      <div className="max-width z-10 flex flex-col sm:translate-y-[-5%]">
        <div className="relative">
          <Title titleControls={titleControls} />
          <Arrow
            arrowLineControls={arrowLineControls}
            arrowPointerControls={arrowPointerControls}
          />
        </div>
        <div className="mt-20 self-start bg-black p-2.5 lg:mt-[50px] md:mt-5 sm:mt-16 sm:px-4 xs:mt-8 xs:pr-1.5">
          <Link
            className="relative inline-flex items-center bg-white px-[60px] py-[26px] text-[22px] font-semibold leading-none transition-colors duration-200 lg:py-6 lg:px-16 lg:text-lg lg:leading-none md:py-4.5 md:px-12"
            to={LINKS.demo}
          >
            <span>Try it Now</span>
            <motion.span
              className="group absolute top-0 left-0 right-0 bottom-0 flex h-full w-full items-center justify-center text-white"
              style={{
                backgroundImage: 'linear-gradient(264.04deg, #F14AFF 15.67%, #401AFF 82.95%)',
              }}
              initial="initial"
              animate={buttonGradientControls}
              variants={buttonGradientVariants}
            >
              <span className="relative z-10 transition-colors group-hover:text-black">
                Try it Now
              </span>
              <span className="absolute top-0 left-0 bottom-0 right-0 bg-white opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
