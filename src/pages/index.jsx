import React from 'react';

import Benefits from 'components/pages/home/benefits';
import Community from 'components/pages/home/community';
import Features from 'components/pages/home/features';
import Hero from 'components/pages/home/hero';
import OpenSource from 'components/pages/home/open-source';
import ParcaAgent from 'components/pages/home/parca-agent';
import Profiling from 'components/pages/home/profiling';
import ProminentText from 'components/pages/home/prominent-text';
import Tools from 'components/pages/home/tools';
import Layout from 'components/shared/layout';

const text2 = `Thanks to <span>eBPF's nature</span>, Parca Agent operates in Linux kernel space allowing it to grab exactly the data needed at low overhead.`;

const HomePage = () => (
  <Layout>
    <Hero />
    <Tools />
    <ProminentText text={text2} theme="orange" withEBPF />
    <Features />
    <Profiling />
    <Benefits />
    <ParcaAgent />
    <OpenSource />
    <Community />
  </Layout>
);

export default HomePage;
