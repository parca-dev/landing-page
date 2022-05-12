/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import * as React from 'react';

const SITE_DOMAIN = `parca.dev`;
const PLAUSIBLE_DOMAIN = `plausible.io`;
const SCRIPT_URI = `/js/plausible.js`;

// eslint-disable-next-line import/prefer-default-export
export const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV === `production`) {
    const scriptProps = {
      'data-domain': SITE_DOMAIN,
      src: `https://${PLAUSIBLE_DOMAIN}${SCRIPT_URI}`,
    };

    return setHeadComponents([
      <link key="plausible-preconnect" rel="preconnect" href={`https://${PLAUSIBLE_DOMAIN}`} />,
      <script key="plausible-script" defer {...scriptProps} />,
      // See: https://plausible.io/docs/custom-event-goals#1-trigger-custom-events-with-javascript-on-your-site
      <script
        key="plausible-custom-events"
        dangerouslySetInnerHTML={{
          __html: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };
          `,
        }}
      />,
    ]);
  }
  return null;
};
