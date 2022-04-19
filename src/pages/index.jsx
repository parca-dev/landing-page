import React from 'react';

import BeesFramerMotion from 'components/pages/home/bees-framer-motion';
import BeesScroll from 'components/pages/home/bees-scroll';
import Benefits from 'components/pages/home/benefits';
import Community from 'components/pages/home/community';
import Hero from 'components/pages/home/hero';
import OpenSource from 'components/pages/home/open-source';
import ParcaAgent from 'components/pages/home/parca-agent';
import Profiling from 'components/pages/home/profiling';
import Tools from 'components/pages/home/tools';
import Layout from 'components/shared/layout';

const HomePage = () => (
  <Layout>
    <Hero />
    <Tools />
    <BeesScroll />
    <Profiling />
    <BeesFramerMotion />
    <Benefits />
    <ParcaAgent />
    <OpenSource />
    <Community />
  </Layout>
);

export default HomePage;
