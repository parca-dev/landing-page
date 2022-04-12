import React from 'react';

import LogoSvg from 'images/logo.inline.svg';

import CtaButtons from '../cta-buttons';
import Link from '../link';

import decorSvg from './images/decor.svg';

const navigation = [
  [
    { label: 'Documentation', url: '/' },
    { label: 'Overview', url: '/' },
    { label: 'Parca from Binary', url: '/' },
  ],
  [
    { label: 'Parca in Kubernetes', url: '/' },
    { label: 'FAQ', url: '/' },
    { label: 'Tutorials', url: '/' },
  ],
];

const Footer = () => (
  <footer className="safe-paddings">
    <div className="container relative flex justify-between py-16 lg:py-10 md:py-11 sm:flex-col sm:space-y-10 sm:py-10">
      <img
        className="absolute top-0 left-[15%] w-[27.5%] lg:left-[14%] lg:w-[19.5%] md:hidden sm:right-4 sm:left-auto sm:block sm:w-1/2"
        src={decorSvg}
        width={335}
        height={180}
        loading="lazy"
        alt=""
        aria-hidden
      />
      <div className="flex flex-col">
        <Link to="/">
          <span className="sr-only">Parca logo</span>
          <LogoSvg className="h-7 w-auto" />
        </Link>
        <span className="mt-auto text-sm font-medium sm:hidden">
          Design by{' '}
          <a href="https://pixelpoint.io/" target="_blank" rel="noopener noreferrer">
            Pixel Point
          </a>
        </span>
      </div>
      <nav className="flex max-w-[625px] items-baseline space-x-[74px] lg:space-x-14 md:items-start md:space-x-[70px] sm:flex-col sm:space-x-0 sm:space-y-10">
        <ul className="flex space-x-11 lg:space-x-14 md:py-2.5 sm:space-x-11 xs:flex-col xs:space-x-0 xs:space-y-8">
          {navigation.map((menu, index) => (
            <li key={index}>
              <ul className="flex flex-col space-y-6">
                {menu.map(({ label, url }, idx) => (
                  <li className="inline leading-none" key={idx}>
                    <Link className="whitespace-nowrap" size="sm" theme="black" to={url}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <CtaButtons className="shrink-0 md:h-full md:grow md:flex-col-reverse md:justify-between md:space-x-0 sm:h-auto sm:flex-row sm:space-x-5" />
      </nav>
      <span className="mt-10 hidden text-sm font-medium sm:block">
        Design by{' '}
        <a href="https://pixelpoint.io/" target="_blank" rel="noopener noreferrer">
          Pixel Point
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
