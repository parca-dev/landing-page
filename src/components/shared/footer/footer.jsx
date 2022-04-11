import React from 'react';

import LogoSvg from 'images/logo.inline.svg';

import CtaButtons from '../cta-buttons';
import Link from '../link';

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
    <div className="container flex justify-between py-16">
      <div className="flex flex-col">
        <Link to="/">
          <span className="sr-only">Parca logo</span>
          <LogoSvg className="h-7 w-auto" />
        </Link>
        <span className="mt-auto text-sm font-medium">
          Design by{' '}
          <a href="https://pixelpoint.io/" target="_blank" rel="noopener noreferrer">
            Pixel Point
          </a>
        </span>
      </div>
      <nav className="flex max-w-[625px] items-baseline space-x-[74px]">
        <ul className="flex space-x-11">
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
        <CtaButtons className="shrink-0" />
      </nav>
    </div>
  </footer>
);

export default Footer;
