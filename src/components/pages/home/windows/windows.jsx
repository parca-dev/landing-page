import { motion } from 'framer-motion';
// import { StaticImage } from 'gatsby-plugin-image';
import React, { Fragment, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import CLang from './frames/c-lang';
import CLangInactive from './frames/c-lang-inactive';
import CPlusplus from './frames/c-plusplus';
import CPlusplusInactive from './frames/c-plusplus-inactive';
import Go from './frames/go';
import GoInactive from './frames/go-inactive';
import Haskell from './frames/haskell';
import Nextjs from './frames/nextjs';
import NextjsInactive from './frames/nextjs-inactive';
import Node from './frames/node';
import NodeInactive from './frames/node-inactive';
import Rust from './frames/rust';
import RustInactive from './frames/rust-inactive';
import frame1 from './images/frame-1.svg';
import frame10 from './images/frame-10.svg';
import frame11 from './images/frame-11.svg';
import frame12 from './images/frame-12.svg';
import frame13 from './images/frame-13.svg';
import frame2 from './images/frame-2.svg';
import frame3 from './images/frame-3.svg';
import frame4 from './images/frame-4.svg';
import frame5 from './images/frame-5.svg';
import frame6 from './images/frame-6.svg';
import frame7 from './images/frame-7.svg';
import frame8 from './images/frame-8.svg';
import frame9 from './images/frame-9.svg';

const items = [
  CPlusplus,
  CPlusplusInactive,
  Node,
  NodeInactive,
  Rust,
  RustInactive,
  CLang,
  CLangInactive,
  Nextjs,
  NextjsInactive,
  Go,
  GoInactive,
  Haskell,
];

const items2 = [
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  frame8,
  frame9,
  frame10,
  frame11,
  frame12,
  frame13,
];

// const items3 = [
//   <StaticImage src="./images-jpg/frame-1.jpg" width={1731} height={857} />,
//   <StaticImage src="./images-jpg/frame-2.jpg" width={1731} height={857} />,
//   <StaticImage src="./images-jpg/frame-3.jpg" width={1731} height={857} />,
//   <StaticImage src="./images-jpg/frame-4.jpg" width={1731} height={857} />,
//   <StaticImage src="./images-jpg/frame-5.jpg" width={1731} height={857} />,
//   <StaticImage src="./images-jpg/frame-6.jpg" width={1731} height={857} />,
//   <StaticImage src="./images-jpg/frame-7.jpg" width={1731} height={857} />,
// ];

const Windows = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [activeItems, setActiveItems] = useState({ 0: true });

  useEffect(() => {
    let previousActiveItem = 0;

    const interval = setInterval(() => {
      if (
        previousActiveItem > items.length - 1 ||
        previousActiveItem + 1 > items.length - 1 ||
        previousActiveItem + 2 > items.length - 1
      ) {
        clearInterval(interval);
        return;
      }

      if (inView) {
        setActiveItems((previousActiveItems) => {
          const activeItems = { ...previousActiveItems };
          activeItems[previousActiveItem] = false;
          activeItems[previousActiveItem + 1] = true;
          activeItems[previousActiveItem + 2] = true;
          previousActiveItem += 2;

          return activeItems;
        });
      }
    }, 500);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <motion.div
      className="relative mx-auto max-w-[1731px] overflow-hidden"
      ref={ref}
      // initial={{ opacity: 0, scale: 1.2 }}
      // animate={{
      //   opacity: 1,
      //   scale: 0.9,
      //   transition: {
      //     opacity: { duration: 0.2, ease: [0.5, 0.5, 0.25, 1] },
      //     scale: { duration: 2.5 },
      //   },
      // }}
    >
      <img
        className="w-full"
        src="data:image/svg+xml;charset=utf-8,%3Csvg width='1731' height='857' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
        alt=""
        aria-hidden="true"
      />

      {/* {items.map((Item, index) => (
        <Fragment key={index}>
          {activeItems[index] && (
            <div className="absolute left-0 top-0 h-full w-full">
              <Item className="h-full w-full" />
            </div>
          )}
        </Fragment>
      ))} */}
      {items2.map((item, index) => (
        <Fragment key={index}>
          {activeItems[index] && (
            <div className="absolute left-0 top-0 h-full w-full">
              <img className="h-full w-full" src={item} alt="" />
            </div>
          )}
        </Fragment>
      ))}
      {/* {items3.map((item, index) => (
        <Fragment key={index}>
          {activeItems[index] && <div className="absolute left-0 top-0 h-full w-full">{item}</div>}
        </Fragment>
      ))} */}
    </motion.div>
  );
};

Windows.propTypes = {};

Windows.defaultProps = {};

export default Windows;
