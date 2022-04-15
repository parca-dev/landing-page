import React from 'react';

import Benefits from 'components/pages/home/benefits';
import Community from 'components/pages/home/community';
import Features from 'components/pages/home/features';
import Hero from 'components/pages/home/hero';
import OpenSource from 'components/pages/home/open-source';
import ParcaAgent from 'components/pages/home/parca-agent';
import Profiling from 'components/pages/home/profiling';
import ProminentText from 'components/pages/home/prominent-text';
import Layout from 'components/shared/layout';

const text1 =
  'Broken down by method name,<br/> class name, and <span>line number</span>. Without complex overhead, in any language or framework.';
const text2 =
  'Thanks to Parca <span>eBPF nature</span>, it operates on a Linux kernel level and provides a continuous profiling without putting pressure on your services.';

const HomePage = () => (
  <Layout>
    <Hero />
    <ProminentText text={text1} />
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
