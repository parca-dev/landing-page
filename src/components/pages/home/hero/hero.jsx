import React from 'react';

import Button from 'components/shared/button';

const Hero = () => (
  <section className="safe-paddings flex h-screen items-center justify-center">
    <div className="container-max">
      <h1 className="flex flex-col space-y-2.5 text-[38px] font-extrabold uppercase leading-none lg:space-y-1.5 lg:text-3xl lg:leading-none md:space-y-1 md:text-2xl md:leading-none sm:space-y-0.5 sm:text-[22px] sm:leading-none">
        <span className="mr-auto">Track</span>
        <span className="text-[8.6rem] lg:text-[106px] md:text-[80px] sm:text-[68px]">
          Memory.CPU.IO.
        </span>
        <span className="ml-auto">Bottlenecks</span>
      </h1>
      <Button className="mt-24" size="2xl" theme="violet-gradient-filled">
        Try it Now
      </Button>
    </div>
  </section>
);

export default Hero;
