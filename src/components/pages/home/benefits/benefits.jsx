import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import dashboardIllustration from './images/dashboard.svg';
import decorSvg from './images/decor.svg';

const SLIDER_DURATION_IN_MS = 5000;
const SLIDER_DURATION_IN_SECONDS = SLIDER_DURATION_IN_MS / 1000;

const title = 'Build faster and <span>more reliable</span> apps with parca';

const listItems = [
  {
    title: 'Save Money',
    description:
      'Many organizations have 20-30% of resources wasted with easily optimized code paths. The Parca Agent aims to lower the entry bar by requiring 0 instrumentation for the whole infrastructure. Deploy in your infrastructure and get started!',
  },
  {
    title: 'Improve Performance',
    description:
      'Using profiling data collected over time, Parca can (with confidence and statistical significance) determine hot paths to optimize. Additionally it can show differences between any label dimension, such as deploys, versions, and regions.',
  },
  {
    title: 'Understand Incidents',
    description:
      'Profiling data provides unique insight and depth into what a process executed over time. Memory leaks, but also momentary spikes in CPU or I/O causing unexpected behavior (which are traditionally difficult to troubleshoot) are a breeze with continuous profiling.',
  },
  {
    title: 'Reduce carbon emission',
    description:
      'Parca name comes from <span class="font-medium">Program for Arctic Regional Climate Assessment (PARCA)</span> and the practice of ice core profiling that has been done as part of it to study climate change. Hopefully with this open source project we can reduce some carbon emissions produced by unnecessary resource usage of data centers.',
  },
];

const sliderItems = [dashboardIllustration, dashboardIllustration, dashboardIllustration];

const sliderItemsAnimationProps = {
  initial: {
    opacity: 0,
    translateY: 20,
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: { ease: [0.25, 0.1, 0, 1], duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { ease: [0.25, 0.1, 0, 1], duration: 0.3 },
  },
};

const Benefits = () => {
  const [sliderRef, isSliderInView] = useInView();
  const [activeSliderItemIndex, setActiveSliderItemIndex] = useState(0);

  useEffect(() => {
    let timeout = null;

    if (isSliderInView) {
      timeout = setTimeout(() => {
        setActiveSliderItemIndex(
          (activeSliderItemIndex) => (activeSliderItemIndex + 1) % sliderItems.length
        );
      }, SLIDER_DURATION_IN_MS);
    } else {
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [activeSliderItemIndex, isSliderInView]);

  return (
    <section className="safe-paddings mt-96 lg:mt-64 lg:overflow-hidden lg:pb-28 md:mt-[132px] md:pb-16 sm:mt-[86px] sm:pb-24">
      <div className="container">
        <h2
          className="with-green-gradient-text heading-6xl max-w-[1040px] lg:max-w-[782px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <ul className="grid-gap-x mt-20 grid grid-cols-2 gap-y-16 lg:mt-16 lg:gap-y-14 md:mt-11 md:gap-y-11 sm:mt-10 sm:grid-cols-1 sm:gap-y-8">
          {listItems.map(({ title, description }, index) => (
            <li
              className="max-w-[520px] lg:max-w-[405px] md:max-w-[305px] sm:max-w-none"
              key={index}
            >
              <h3 className="heading-2xl uppercase">{title}</h3>
              <p
                className="mt-4 text-lg lg:mt-3 md:mt-2 md:text-base md:leading-snug"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </li>
          ))}
        </ul>
        <div className="mt-20 lg:mt-16 md:mt-12 sm:mt-10" ref={sliderRef}>
          <div className="relative max-w-[1112px]">
            <AnimatePresence initial={false} exitBeforeEnter>
              {sliderItems.map((item, index) =>
                index === activeSliderItemIndex ? (
                  <motion.img
                    className="relative z-10 rounded-xl lg:w-full md:rounded-lg sm:rounded"
                    src={item}
                    width={1112}
                    height={668}
                    alt="Parca dashboard"
                    loading="lazy"
                    style={{
                      boxShadow:
                        '0px 20px 40px rgba(20, 29, 31, 0.1), 0px 10px 20px rgba(20, 29, 31, 0.1), 0px 0px 0px rgba(20, 29, 31, 0.1)',
                    }}
                    key={index}
                    {...sliderItemsAnimationProps}
                  />
                ) : null
              )}
            </AnimatePresence>
            <img
              className="absolute -right-24 -bottom-32 lg:bottom-[-12.5%] lg:right-[-8%] md:right-[-10%] md:bottom-[-10%] md:h-auto md:w-[284px] sm:right-[-15%] sm:bottom-[-19%] sm:w-[190px]"
              width={320}
              height={320}
              src={decorSvg}
              alt=""
              loading="lazy"
              aria-hidden
            />
          </div>
          <ul className="mt-10 flex items-center space-x-5 lg:mt-8 md:mt-6 sm:mt-5">
            {sliderItems.map((_, index) => (
              <li key={index}>
                <button
                  className="h-1.5 w-14 overflow-hidden rounded-2xl bg-gray-90 md:h-1 md:w-11"
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveSliderItemIndex(index)}
                >
                  {index === activeSliderItemIndex && isSliderInView && (
                    <motion.span
                      className="block h-full rounded-2xl"
                      initial={{ width: 0 }}
                      animate={{
                        width: '100%',
                        transition: { duration: SLIDER_DURATION_IN_SECONDS },
                      }}
                      style={{
                        background: 'linear-gradient(267.71deg, #57F906 -0.04%, #00CCC0 68.91%)',
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
