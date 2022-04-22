import React, { Fragment, useCallback, useEffect, useState } from 'react';
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

const intervals = [500, 500, 500, 350, 350, 250, 250, 200, 200, 200, 200, 200, 200];

const Windows = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [activeItems, setActiveItems] = useState({ 0: true });
  const [idx, setIdx] = useState(0);
  const [previousActiveItem, setPreviousActiveItem] = useState(0);
  const showWindows = useCallback(() => {
    if (typeof intervals[idx] !== 'undefined' && inView && previousActiveItem < items.length - 1) {
      setActiveItems((previousActiveItems) => {
        const activeItems = { ...previousActiveItems };
        activeItems[previousActiveItem] = false;
        activeItems[previousActiveItem + 1] = true;
        activeItems[previousActiveItem + 2] = true;
        return activeItems;
      });

      setPreviousActiveItem(previousActiveItem + 2);
      setIdx((idx) => idx + 1);
    }
  }, [idx, inView, previousActiveItem]);

  useEffect(() => {
    const timer = setTimeout(showWindows, intervals[idx]);
    return () => clearTimeout(timer);
  }, [idx, inView, showWindows]);
  return (
    <div className="relative mx-auto max-w-[1731px] overflow-hidden" ref={ref}>
      <img
        className="w-full"
        src="data:image/svg+xml;charset=utf-8,%3Csvg width='1731' height='857' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
        alt=""
        aria-hidden="true"
      />

      {items.map((Item, index) => (
        <Fragment key={index}>
          {activeItems[index] && (
            <div className="absolute left-0 top-0 h-full w-full">
              <Item className="h-full w-full" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Windows;
