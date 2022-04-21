import React from 'react';

// import Bees from 'components/pages/home/bees';
import Benefits from 'components/pages/home/benefits';
import Community from 'components/pages/home/community';
import EBPF from 'components/pages/home/ebpf';
import Features from 'components/pages/home/features';
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
    {/* <Bees /> */}
    <EBPF />
    <Features />
    <Profiling />
    <Benefits />
    <ParcaAgent />
    <OpenSource />
    <Community />
  </Layout>
);

export default HomePage;
