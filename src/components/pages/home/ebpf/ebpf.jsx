import React from 'react';

import Bee from './images/bee.inline.svg';

const EBPF = () => (
  <section className="safe-paddings h-screen">
    <div className="container flex h-full items-center justify-center">
      <div className="relative">
        <h2 className="heading-6xl flat-none lg:flat-breaks with-orange-gradient-text">
          Thanks to Parca <span>eBPF nature</span>, it operates on a Linux kernel level and provides
          a continuous profiling without putting pressure on your services.
        </h2>
        <Bee className="absolute right-[-4.9%] bottom-[-41%] h-auto w-20 xl:right-0 lg:bottom-[-35%] lg:w-[60px] sm:bottom-[-18%] sm:right-[5%] sm:h-auto sm:w-12" />
      </div>
    </div>
  </section>
);

export default EBPF;
