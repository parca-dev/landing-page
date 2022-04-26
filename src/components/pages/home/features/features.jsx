import React from 'react';
import { useInView } from 'react-intersection-observer';

import Icon from './icon';

const title = 'Get a full picture of how your app performs in production.';
const items = [
  {
    iconName: 'multi-dimensional',
    text: 'Multi-dimensional data model',
  },
  {
    iconName: 'optimized',
    text: 'Optimized, built-in storage',
  },
  {
    iconName: 'profile',
    text: 'Support for pushing and<br/> pulling profiles from targets',
  },
  {
    iconName: 'query',
    text: 'Query engine specifically<br/> designed for profiling data',
  },
  {
    iconName: 'targets',
    text: 'Targets are discovered via service<br/> discovery or static configuration',
  },
  {
    iconName: 'language',
    text: 'Label-selector based query<br/> language',
  },
];

const Features = () => {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.5 });
  return (
    <section
      className="safe-paddings bg-black pt-40 pb-52 text-white lg:pt-28 lg:pb-40 md:pt-20 md:pb-28 sm:pt-14 sm:pb-20"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="heading-6xl max-w-[973px] lg:max-w-[800px]">{title}</h2>
        <ul className="grid-gap-x mt-28 grid grid-cols-3 gap-y-28 lg:mt-20 lg:gap-y-20 md:mt-16 md:grid-cols-2 md:gap-y-16 sm:mt-10 sm:gap-x-4 sm:gap-y-10 xs:grid-cols-1">
          {items.map(({ text, iconName }, index) => (
            <li
              className="flex max-w-[350px] flex-col space-y-5 lg:max-w-[262px] md:max-w-[285px] sm:max-w-[220px] sm:space-y-4 xs:max-w-none"
              key={index}
            >
              <Icon isSectionInView={isSectionInView} iconName={iconName} />
              <p
                className="flat-none lg:flat-breaks text-lg leading-snug md:text-base md:leading-snug sm:text-sm sm:leading-snug"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Features;
