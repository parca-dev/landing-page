import React from 'react';

import DataIcon from './images/data.inline.svg';
import DiscoveryIcon from './images/discovery.inline.svg';
import EngineIcon from './images/engine.inline.svg';
import LabelIcon from './images/label.inline.svg';
import StorageIcon from './images/storage.inline.svg';
import TargetsIcon from './images/targets.inline.svg';

const title = 'Get a full picture of how does your app works in production';
const items = [
  {
    icon: DataIcon,
    text: 'Multi-dimensional data model',
  },
  {
    icon: StorageIcon,
    text: 'Optimized, built-in storage',
  },
  {
    icon: TargetsIcon,
    text: 'Support for pushing and<br/> pulling profiles from targets',
  },
  {
    icon: EngineIcon,
    text: 'Query engine specifically<br/> designed for profiling data',
  },
  {
    icon: DiscoveryIcon,
    text: 'Targets are discovered via service<br/> discovery or static configuration',
  },
  {
    icon: LabelIcon,
    text: 'Label-selector based query language',
  },
];
const Features = () => (
  <section className="safe-paddings bg-black py-40 text-white">
    <div className="container">
      <h2 className="heading-6xl max-w-[900px]">{title}</h2>
      <ul className="grid-gap-x mt-28 grid grid-cols-3 gap-y-28">
        {items.map(({ icon: Icon, text }, index) => (
          <li className="flex max-w-[350px] flex-col space-y-5" key={index}>
            <Icon className="h-[88px] w-[88px]" />
            <p className="text-lg leading-snug" dangerouslySetInnerHTML={{ __html: text }} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Features;
