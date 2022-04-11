import React from 'react';

import dashboardSvg from './images/dashboard.svg';

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
      'Parca name comes from <strong>Program for Arctic Regional Climate Assessment (PARCA)</strong> and the practice of ice core profiling that has been done as part of it to study climate change. Hopefully with this open source project we can reduce some carbon emissions produced by unnecessary resource usage of data centers.',
  },
];

const Benefits = () => (
  <section className="safe-paddings mt-96">
    <div className="container">
      <h2
        className="with-green-gradient-text heading-6xl max-w-[1040px]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <ul className="grid-gap-x mt-20 grid grid-cols-2 gap-y-16">
        {items.map(({ title, description }, index) => (
          <li className="max-w-[520px]" key={index}>
            <h3 className="heading-2xl uppercase">{title}</h3>
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: description }} />
          </li>
        ))}
      </ul>
      <img
        className="ml-[-3%] mt-20"
        src={dashboardSvg}
        width={1214}
        height={796}
        alt="Parca dashboard"
        loading="lazy"
      />
    </div>
  </section>
);

export default Benefits;
