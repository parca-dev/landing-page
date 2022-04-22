import React from 'react';

import MENUS from 'constants/menus';
import LogoSvg from 'images/logo.inline.svg';

import CtaButtons from '../cta-buttons';
import Link from '../link';

import decorSvg from './images/decor.svg';

const Footer = () => (
  <footer className="safe-paddings">
    <div className="container relative flex justify-between py-16 lg:py-10 md:py-11 sm:flex-col sm:overflow-hidden sm:py-10">
      <img
        className="absolute -top-[70%] left-[15%] -z-10 w-[27.5%] lg:top-[-47.8%] lg:left-[14%] lg:w-[19.5%] md:hidden sm:top-[-117px] sm:left-auto sm:right-[5%] sm:block sm:w-[190px]"
        src={decorSvg}
        width={335}
        height={180}
        loading="lazy"
        alt=""
        aria-hidden
      />
      <div className="flex flex-col lg:pt-2 md:pb-2 sm:py-0">
        <Link to="/">
          <span className="sr-only">Parca logo</span>
          <LogoSvg className="h-7 w-auto" />
        </Link>
        <span className="mt-auto text-sm font-medium sm:hidden">
          Design by{' '}
          <Link
            className="transition-colors duration-200 hover:text-blue"
            to="https://pixelpoint.io/"
            target="_blank"
            rel="noopener"
          >
            Pixel Point
          </Link>
        </span>
      </div>
      <nav className="flex max-w-[625px] items-baseline space-x-[74px] xl:max-w-none lg:space-x-14 md:items-start sm:mt-10 sm:flex-col sm:space-x-0 sm:space-y-10">
        <ul className="flex space-x-11 lg:space-x-14 md:py-2.5 sm:space-x-11 sm:py-0 xs:flex-col xs:space-x-0 xs:space-y-8">
          {MENUS.footer.map((menu, index) => (
            <li key={index}>
              <ul className="flex flex-col space-y-6 sm:space-y-5">
                {menu.map(({ text, to }, index) => (
                  <li className="inline leading-none" key={index}>
                    <Link className="whitespace-nowrap" size="sm" theme="black" to={to}>
                      {text}
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
        <Link
          className="transition-colors duration-200 hover:text-blue"
          to="https://pixelpoint.io/"
          target="_blank"
          rel="noopener"
        >
          Pixel Point
        </Link>
      </span>
    </div>
  </footer>
);

export default Footer;
