import React from 'react';

import Button from 'components/shared/button';

const Hero = () => (
  <section className="safe-paddings flex h-screen items-center justify-center sm:justify-start">
    <div className="container-max sm:mx-0">
      <h1 className="flex flex-col space-y-2.5 text-[38px] font-extrabold uppercase leading-none lg:space-y-1.5 lg:text-3xl lg:leading-none md:space-y-1 md:text-2xl md:leading-none sm:space-y-0.5 sm:text-[22px] sm:leading-none">
        <span className="mr-auto">Track</span>
        <span className="text-[8.6rem] lg:text-[106px] md:text-[80px] sm:inline-flex sm:flex-col sm:text-[68px] xs:text-6xl xs:leading-none">
          <span>
            Memory<span className="sm:hidden">.</span>
          </span>
          <span>CPU.IO.</span>
        </span>
        <span className="ml-auto sm:mr-auto sm:ml-0">Bottlenecks</span>
      </h1>
      <Button className="mt-24" size="2xl" theme="violet-gradient-filled">
        Try it Now
      </Button>
    </div>
  </section>
);

export default Hero;
