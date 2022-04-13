import React, { useEffect, useRef } from 'react';

import Button from 'components/shared/button';
import useWindowSize from 'hooks/use-window-size';

const isBrowser = typeof window !== 'undefined';

const ibmplexmonoFont =
  isBrowser && new FontFace('IBM Plex Mono', 'url(/fonts/ibmplexmono-light.woff2)');

const getPixelRatio = (context) => {
  const backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  const isDevicePixelRatio = isBrowser && window.devicePixelRatio;

  return (isDevicePixelRatio || 1) / backingStore;
};

function getRandomString(length) {
  let string = '';
  for (
    string;
    string.length < length;
    string += 'ABCDEF0123456789'.charAt(Math.random() * 10 || 0)
  );
  return string;
}

const Hero = () => {
  const ref = useRef();
  const { width, height } = useWindowSize();

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');

    const ratio = getPixelRatio(context);

    const cvWidth = width * ratio;
    const cvHeight = height * ratio;
    canvas.width = cvWidth;
    canvas.height = cvHeight;
    canvas.style.width = `${cvWidth}px`;
    canvas.style.height = `${cvHeight}px`;

    const x = Math.round(cvWidth / 25);
    const y = Math.round(cvHeight / 25);

    ibmplexmonoFont.load().then((font) => {
      document.fonts.add(font);

      for (let i = 0; i < y; i += 1) {
        for (let j = 0; j < x; j += 1) {
          context.font = '300 16px IBM Plex Mono';
          context.fillStyle = '#E3E7E8';
          context.fillText(getRandomString(2), 22 + j * 34, 22 + i * 28, width);
        }
      }
    });
  }, [width, height]);

  return (
    <section className="safe-paddings relative flex h-screen w-screen items-center justify-center overflow-hidden sm:justify-start">
      <canvas className="absolute -z-10" ref={ref} />
      <div className="container-max sm:mx-0">
        <h1 className="flex flex-col space-y-2.5 text-[38px] font-extrabold uppercase leading-none lg:space-y-1.5 lg:text-3xl lg:leading-none md:space-y-1 md:text-2xl md:leading-none sm:space-y-0.5 sm:text-[22px] sm:leading-none ">
          <span className="mr-auto bg-white">Track</span>
          <span className="bg-white text-[8.6rem] lg:text-[106px] md:text-[80px] sm:inline-flex sm:flex-col sm:text-[68px] xs:text-6xl xs:leading-none">
            <span>
              Memory<span className="sm:hidden">.</span>
            </span>
            <span>CPU.IO.</span>
          </span>
          <span className="ml-auto bg-white sm:mr-auto sm:ml-0">Bottlenecks</span>
        </h1>
        <Button
          className="mt-24 lg:mt-[60px] md:mt-10 sm:mt-[84px]"
          size="2xl"
          theme="violet-gradient-filled"
        >
          Try it Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
