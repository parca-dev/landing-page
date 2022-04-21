import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';

import decorSvg from './images/decor.svg';

const title =
  'Many organizations have 20-30% of resources wasted in easily optimized code paths. The Parca Agent aims to lower the bar of starting to profile by requiring zero-instrumentation for the whole infrastructure.';
const links = [
  { text: 'Install binary', to: LINKS.binary },
  { text: 'Deploy to Kubernetes', to: LINKS.kubernetes },
];

const items = [
  { className: 'violet-gradient-text', text: 'Server' },
  { className: 'orange-gradient-text', text: 'Web UI' },
  { className: 'green-gradient-text', text: 'Agent' },
];

const ParcaAgent = () => (
  <section className="safe-paddings mt-80 lg:mt-24 md:mt-24 sm:mt-0">
    <div className="container">
      <h2 className="heading-5xl">{title}</h2>
      <div className="mt-8 space-x-8 lg:mt-7 md:mt-6 md:space-x-6 sm:mt-4.5 sm:space-x-4 xs:flex xs:flex-col xs:space-x-0 xs:space-y-4">
        {links.map(({ text, to }, index) => (
          <Link theme="blue" size="2xl" to={to} key={index}>
            {text}
          </Link>
        ))}
      </div>
      <div className="relative mt-20 lg:mt-16 md:mt-12 sm:mt-10">
        <img
          className="absolute left-[-116px] -bottom-32 -z-10 lg:-bottom-28 sm:left-[-23%] sm:bottom-[-23%] sm:h-auto sm:w-[190px]"
          src={decorSvg}
          alt=""
          width={320}
          height={320}
          loading="lazy"
          aria-hidden
        />
        <ul className="grid max-w-[952px] auto-rows-fr grid-cols-3 gap-x-14 lg:gap-x-7 md:gap-x-5 sm:grid-cols-1 sm:gap-y-4">
          {items.map(({ className, text }, index) => (
            <li
              className="flex flex-col items-center justify-center border-4 border-black bg-white py-[87px] font-extrabold uppercase leading-[1.125] lg:py-[85px] lg:leading-[1.125] md:py-[70px] md:leading-[1.125] sm:h-40 sm:py-10 sm:leading-[1.125]"
              key={index}
            >
              <span className="text-[38px] lg:text-[32px] md:text-3xl sm:text-[26px]">Parca</span>
              <span className={clsx(className, 'text-[56px] lg:text-5xl md:text-[44px]')}>
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ParcaAgent;
