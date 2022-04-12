import React from 'react';

import dashboardSvg from './images/dashboard.svg';
import decorSvg from './images/decor.svg';

const title = 'Build faster and <span>more reliable</span> apps with parca';
const items = [
  {
    title: 'Save Money',
    description:
      'Many organizations have 20-30% of resources wasted with easily optimized code paths. The Parca Agent aims to lower the entry bar by requiring 0 instrumentation for the whole infrastructure. Deploy in your infrastructure and get started!',
  },
  {
    title: 'Improve Performance',
    description:
      'Using profiling data collected over time, Parca can (with confidence and statistical significance) determine hot paths to optimize. Additionally it can show differences between any label dimension, such as deploys, versions, and regions.',
  },
  {
    title: 'Understand Incidents',
    description:
      'Profiling data provides unique insight and depth into what a process executed over time. Memory leaks, but also momentary spikes in CPU or I/O causing unexpected behavior (which are traditionally difficult to troubleshoot) are a breeze with continuous profiling.',
  },
  {
    title: 'Reduce carbon emission',
    description:
      'Parca name comes from <span class="font-medium">Program for Arctic Regional Climate Assessment (PARCA)</span> and the practice of ice core profiling that has been done as part of it to study climate change. Hopefully with this open source project we can reduce some carbon emissions produced by unnecessary resource usage of data centers.',
  },
];

const Benefits = () => (
  <section className="safe-paddings mt-96 lg:mt-64 lg:overflow-hidden lg:pb-28 md:mt-[132px] md:pb-16 sm:mt-[86px] sm:pb-12">
    <div className="container">
      <h2
        className="with-green-gradient-text heading-6xl max-w-[1040px] lg:max-w-[782px]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <ul className="grid-gap-x mt-20 grid grid-cols-2 gap-y-16 lg:mt-16 lg:gap-y-14 md:mt-11 md:gap-y-11 sm:mt-10 sm:grid-cols-1 sm:gap-y-8">
        {items.map(({ title, description }, index) => (
          <li className="max-w-[520px] lg:max-w-[405px] md:max-w-[305px] sm:max-w-none" key={index}>
            <h3 className="heading-2xl uppercase">{title}</h3>
            <p
              className="mt-4 text-lg lg:mt-3 md:mt-2 md:text-base md:leading-snug"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </li>
        ))}
      </ul>
      <div className="relative ml-[-3.1%] mt-16 lg:mx-[-3.5%] lg:mt-[50px] sm:mt-8">
        <img
          className="absolute right-0 bottom-[-9%] -z-10 lg:bottom-[-12.5%] lg:right-[-8%] md:right-[-10%] md:bottom-[-10%] md:h-auto md:w-[284px] sm:right-[-15%] sm:bottom-[-19%] sm:w-[190px]"
          width={320}
          height={320}
          src={decorSvg}
          alt=""
          loading="lazy"
          aria-hidden
        />
        <img
          className="lg:w-full"
          src={dashboardSvg}
          width={1192}
          height={748}
          alt="Parca dashboard"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Benefits;
