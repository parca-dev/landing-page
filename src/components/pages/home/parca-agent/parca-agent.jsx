import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link';

import decorSvg from './images/decor.svg';

const title =
  'Many organizations have 20-30% of resources wasted with easily optimized code paths. The Parca Agent aims to lower the entry bar by requiring 0 instrumentation for the whole infrastructure.';
const links = [
  { text: 'Install binary', url: '/' },
  { text: 'Deploy to Kubernetes', url: '/' },
];

const items = [
  { className: 'violet-gradient-text', text: 'Server' },
  { className: 'orange-gradient-text', text: 'Web UI' },
  { className: 'green-gradient-text', text: 'Agent' },
];

const ParcaAgent = () => (
  <section className="safe-paddings mt-64">
    <div className="container">
      <h2 className="heading-5xl">{title}</h2>
      <div className="mt-8 space-x-8">
        {links.map(({ text, url }, index) => (
          <Link theme="blue" size="2xl" key={index} to={url}>
            {text}
          </Link>
        ))}
      </div>
      <ul className="relative mt-20 grid max-w-[952px] auto-rows-[280px] grid-cols-3 gap-x-14">
        <img
          className="absolute left-[-116px] -bottom-32 -z-10"
          src={decorSvg}
          alt=""
          width={320}
          height={320}
          loading="lazy"
          aria-hidden
        />
        {items.map(({ className, text }, index) => (
          <li
            className="flex flex-col items-center justify-center border-4 border-black bg-white font-extrabold uppercase leading-[1.125]"
            key={index}
          >
            <span className="text-[38px]">Parca</span>
            <span className={clsx(className, 'text-[56px]')}>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ParcaAgent;
