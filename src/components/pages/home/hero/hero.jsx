import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import useWindowSize from 'hooks/use-window-size';

import Title from './title';

const TEXT_GAP = 12;
const TEXT_WIDTH = 22;
const TEXT_HEIGHT = 16;
const isBrowser = typeof window !== 'undefined';

const ibmplexmonoFont =
  isBrowser && new FontFace('IBM Plex Mono', 'url(/fonts/ibmplexmono-light.woff2)');

const getPixelRatio = () => {
  const isDevicePixelRatio = isBrowser && window.devicePixelRatio;
  return isDevicePixelRatio || 1;
};

function getRandomString(length) {
  const digits = 'ABCDEF0123456789';
  let string = '';
  for (string; string.length < length; string += digits.charAt(Math.random() * digits.length || 0));
  return string;
}

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
      times: [0, 0.16, 0.33, 0.66, 1],
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
  const arrowLineControls = useAnimation();
  const arrowPointerControls = useAnimation();
  const buttonGradientControls = useAnimation();

  useEffect(() => {
    const fn = async () => {
      if (inView) {
        await titleControls.start('animate');
        await arrowLineControls.start('animate');
        await arrowPointerControls.start('animate');
        await buttonGradientControls.start('animate');
      }
    };
    fn();
  }, [arrowLineControls, arrowPointerControls, buttonGradientControls, inView, titleControls]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const ratio = getPixelRatio();
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.scale(ratio, ratio);

    const x = Math.round(width / 25);
    const y = Math.round(height / 25);

    ibmplexmonoFont.load().then((font) => {
      document.fonts.add(font);
      document.fonts.ready.then(() => {
        for (let i = 0; i < y; i += 1) {
          for (let j = 0; j < x; j += 1) {
            context.font = '300 16px IBM Plex Mono';
            context.fillStyle = '#242828';
            context.fillText(
              getRandomString(2),
              TEXT_GAP + j * (TEXT_GAP + TEXT_WIDTH),
              i * (TEXT_GAP + TEXT_HEIGHT)
            );
          }
        }
      });
    });
  }, [height, width]);

  return (
    <section
      className="safe-paddings relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black sm:justify-start"
      ref={sectionRef}
    >
      <canvas className="absolute" ref={canvasRef} />
      <div className="container-max z-10 flex flex-col sm:mx-0">
        <div className="relative">
          <Title titleControls={titleControls} />
          <svg
            className="absolute right-32 top-[calc(100%+1.25rem)] "
            width="823"
            height="132"
            viewBox="0 0 823 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
        </div>
        <div className="mt-24 self-start bg-black p-2.5 lg:mt-[60px] md:mt-10 sm:mt-[84px]">
          <a
            className="relative inline-flex items-center bg-black px-[60px] py-[26px] text-[22px] font-medium leading-none text-white transition-colors duration-200 lg:py-6 lg:px-16 lg:text-lg lg:leading-none md:py-4.5 md:px-12"
            href="#"
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
