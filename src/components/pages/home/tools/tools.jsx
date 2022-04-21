import clsx from 'clsx';
import React from 'react';

import BracesIcon from './images/braces.inline.svg';
import InfinityIcon from './images/infinity.inline.svg';

const Tools = () => (
  <div className="safe-paddings h-screen">
    <div className="container flex h-full items-center justify-center">
      <div className="relative">
        <h2 className={clsx('heading-6xl flat-none lg:flat-breaks')}>
          Broken down 🛠👀🛠 by method name, class name, and{' '}
          <BracesIcon className="mb-1.5 inline-flex h-14 w-14 items-center xl:h-12 xl:w-12 lg:h-10 lg:w-10 md:h-7 md:w-7" />{' '}
          line number. Without complex overhead, in{' '}
          <InfinityIcon className="mb-1.5 inline-flex h-14 w-14 items-center xl:h-12 xl:w-12 lg:h-10 lg:w-10 md:h-7 md:w-7" />{' '}
          any language or framework.
        </h2>
      </div>
    </div>
  </div>
);

export default Tools;
