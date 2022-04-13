import React, { useEffect, useRef } from 'react';

import Button from 'components/shared/button';
import useWindowSize from 'hooks/use-window-size';

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

const Hero = () => {
  const ref = useRef();
  const { width, height } = useWindowSize();

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');

    const ratio = getPixelRatio();
    const cvWidth = width * ratio;
    const cvHeight = height * ratio;
    canvas.width = cvWidth;
    canvas.height = cvHeight;
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
          context.fillStyle = '#E3E7E8';
          context.fillText(getRandomString(2), 22 + j * 34, 16 + i * 28);
        }
      }
    });
  }, [width, height]);

  return (
    <section className="safe-paddings relative flex h-screen w-screen items-center justify-center overflow-hidden sm:justify-start">
      <canvas className="absolute -z-10" ref={ref} />
      <div className="container-max flex flex-col sm:mx-0">
        <h1 className="flex flex-col text-[38px] font-extrabold uppercase leading-none lg:text-3xl lg:leading-none md:text-2xl md:leading-none sm:text-[22px] sm:leading-none ">
          <span className="mr-auto bg-white px-2.5 py-2.5">Track</span>
          <span className="-my-1.5 bg-white px-2.5 text-[8.6rem] lg:text-[106px] md:text-[80px] sm:inline-flex sm:flex-col sm:text-[68px] xs:text-6xl xs:leading-none">
            <span>
              Memory<span className="sm:hidden">.</span>
            </span>
            <span>CPU.IO.</span>
          </span>
          <span className="ml-auto bg-white px-2.5 py-2.5 sm:mr-auto sm:ml-0">Bottlenecks</span>
        </h1>
        <div className="mt-24 self-start bg-white p-2.5 lg:mt-[60px] md:mt-10 sm:mt-[84px]">
          <Button size="2xl" theme="black-filled">
            Try it Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
