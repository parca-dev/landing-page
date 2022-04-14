import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import useWindowSize from 'hooks/use-window-size';

import Title from './title';

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

const arrowVariants = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
};

const buttonVariants = {
  initial: {
    background: '#fff',
    color: '#181A1B',
  },
  animate: {
    backgroundImage: 'linear-gradient(264.04deg, #F14AFF 15.67%, #401AFF 82.95%)',
    color: '#fff',
  },
};

const Hero = () => {
  const canvasRef = useRef();
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
  });
  const { width, height } = useWindowSize();

  const titleControls = useAnimation();
  const arrowControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    const fn = async () => {
      if (inView) {
        await titleControls.start('animate');
        await arrowControls.start('animate');
        await buttonControls.start('animate');
      }
    };
    fn();
  }, [arrowControls, buttonControls, inView, titleControls]);

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

      for (let i = 0; i < y; i += 1) {
        for (let j = 0; j < x; j += 1) {
          context.font = '300 16px IBM Plex Mono';
          context.fillStyle = '#242828';
          context.fillText(getRandomString(2), 12 + j * 34, i * 28);
        }
      }
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
            width="825"
            height="132"
            viewBox="0 0 825 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M823 0V121H3M3 121L14.625 111.375M3 121L14.625 130.625"
              stroke="#ffffff"
              strokeWidth="3"
              initial="initial"
              variants={arrowVariants}
              transition={{ duration: 0.15 }}
              animate={arrowControls}
            />
          </svg>
        </div>
        <div className="mt-24 self-start bg-black p-2.5 lg:mt-[60px] md:mt-10 sm:mt-[84px]">
          <motion.a
            className="inline-flex items-center px-[60px] py-[26px] text-[22px] font-medium leading-none  transition-colors duration-200 lg:py-6 lg:px-16 lg:text-lg lg:leading-none md:py-4.5 md:px-12"
            initial="initial"
            variants={buttonVariants}
            transition={{ duration: 0.1 }}
            animate={buttonControls}
          >
            Try it Now
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
