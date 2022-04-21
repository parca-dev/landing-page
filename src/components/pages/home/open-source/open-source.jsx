import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';

import DroneLogo from './images/drone.inline.svg';
import KubernetesLogo from './images/kubernetes.inline.svg';
import PrometheusLogo from './images/prometheus.inline.svg';
import ThanosLogo from './images/thanos.inline.svg';

const OpenSource = () => (
  <div className="safe-paddings mt-96 lg:mt-64 md:mt-48 sm:mt-28">
    <div className="container">
      <p className="heading-5xl with-link-blue-5xl flat-none xl:flat-breaks leading-snug lg:leading-snug md:leading-snug sm:leading-snug">
        Parca is Open Source.{' '}
        <StaticImage
          className="mt-1 inline-flex justify-center lg:h-12 md:h-10"
          src="./images/avatars.png"
          width={452}
          height={56}
          quality={95}
          objectFit="contain"
          formats={['png']}
          alt="Community avatars"
          loading="lazy"
        />
        <br />
        Parca was originally created by Polar Signals
        <br /> and people who contributed to projects such as{' '}
        <span className="inline-flex items-baseline">
          <PrometheusLogo className="mb-1 mr-4 h-14 w-14 self-center xl:mr-2 xl:h-12 xl:w-12 lg:h-10 lg:w-10 md:h-7 md:w-7" />
          Prometheus
        </span>
        ,{' '}
        <span className="inline-flex items-baseline">
          <ThanosLogo className="mb-1 mr-4 h-14 w-14 self-center xl:mr-2 xl:h-12 xl:w-12 lg:h-10 lg:w-10 md:h-7 md:w-7" />
          Thanos
        </span>
        ,{' '}
        <span className="inline-flex items-baseline">
          <KubernetesLogo className="mb-1 mr-4 h-14 w-14 self-center xl:mr-2 xl:h-12 xl:w-12 lg:h-10 lg:w-10 md:h-7 md:w-7" />
          Kubernetes
        </span>
        , <br />
        <span className="inline-flex items-baseline">
          <DroneLogo className="mb-1 mr-4 h-14 w-14 self-center xl:mr-2 xl:h-12 xl:w-12 lg:h-10 lg:w-10 md:h-7 md:w-7" />
          Drone
        </span>{' '}
        and more. All components are available under the{' '}
        <Link to={LINKS.license}>Apache 2 License</Link> on <Link to={LINKS.github}>GitHub</Link>.
      </p>
    </div>
  </div>
);

export default OpenSource;
