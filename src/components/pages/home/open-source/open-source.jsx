import React from 'react';

const text = `Parca is Open Source. Parca originally created by Polar Signals and people who contributed to projects like Prometheus, Drone, eBPF. All components are available under the <a href="#">Apache 2 License</a> on <a href="#">GitHub</a>.`;

const OpenSource = () => (
  <div className="safe-paddings mt-96">
    <div className="container">
      <p className="heading-5xl with-link-blue-5xl" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </div>
);

export default OpenSource;
