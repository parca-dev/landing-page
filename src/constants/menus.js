import LINKS from './links';

export default {
  header: [
    { text: 'Quick Start', to: LINKS.quickstart },
    { text: 'Documentation', to: LINKS.documentation },
    { text: 'Tutorials', to: LINKS.tutorials },
  ],
  footer: [
    [
      { text: 'Documentation', to: LINKS.documentation },
      { text: 'Overview', to: LINKS.overview },
      { text: 'Parca from Binary', to: LINKS.binary },
    ],
    [
      { text: 'Parca in Kubernetes', to: LINKS.kubernetes },
      { text: 'FAQ', to: LINKS.faq },
      { text: 'Tutorials', to: LINKS.tutorials },
    ],
  ],
  mobile: [
    { text: 'Quick Start', to: LINKS.quickstart },
    { text: 'Documentation', to: LINKS.documentation },
    { text: 'Tutorials', to: LINKS.tutorials },
  ],
};
