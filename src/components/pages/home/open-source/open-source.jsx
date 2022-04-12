import React from 'react';

const text = `Parca is Open Source. Parca originally created<br/> by Polar Signals and people who contributed<br/> to projects like Prometheus, Drone, eBPF.<br/> All components are available under the <a href="#">Apache 2 License</a> on <a href="#">GitHub</a>.`;

const OpenSource = () => (
  <div className="safe-paddings mt-96 lg:mt-64 md:mt-48 sm:mt-28">
    <div className="container">
      <p
        className="heading-5xl with-link-blue-5xl flat-none 2xl:flat-breaks"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  </div>
);

export default OpenSource;
