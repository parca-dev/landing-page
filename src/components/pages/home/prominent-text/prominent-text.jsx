import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import EBPFSvg from './images/ebpf.inline.svg';

const themeClassNames = {
  violet: 'with-violet-gradient-text',
  orange: 'with-orange-gradient-text ',
};
const ProminentText = ({ text, theme, withEBPF }) => (
  <section className="safe-paddings h-screen">
    <div className="container flex h-full items-center justify-center">
      <div className="relative">
        <h2
          className={clsx('heading-6xl flat-none lg:flat-breaks', themeClassNames[theme])}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {withEBPF && <EBPFSvg className="absolute right-[-4.9%] bottom-[-41%] h-auto w-20" />}
      </div>
    </div>
  </section>
);

ProminentText.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
  withEBPF: PropTypes.bool,
};

ProminentText.defaultProps = {
  theme: 'violet',
  withEBPF: false,
};

export default ProminentText;
