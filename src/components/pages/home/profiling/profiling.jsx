import React from 'react';

import Link from 'components/shared/link';

import dataSvg from './images/data.svg';

const title = 'Never miss the important data with a continuous profiling.';
const description =
  'You never know at which point in time you are going to need profiling data, so always collect it at low overhead.';
const linkText = 'Learn more';
const linkUrl = '/';

const Profiling = () => (
  <section className="safe-paddings mt-52">
    <div className="container">
      <h2 className="heading-6xl max-w-[1042px]">{title}</h2>
      <p className="mt-4 max-w-[904px] text-2xl">{description}</p>
      <Link className="mt-8" to={linkUrl} size="2xl" theme="blue">
        {linkText}
      </Link>
    </div>
    <img
      className="mx-auto mt-20 w-full max-w-[1920px]"
      src={dataSvg}
      alt="Profiling data"
      width={1920}
      height={558}
      loading="lazy"
    />
  </section>
);

export default Profiling;
