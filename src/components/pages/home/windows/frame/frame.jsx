import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

const Frame = ({ controls, variants, delay, snippet: Snippet }) => (
  <motion.div
    className="absolute left-0 top-0 h-full w-full"
    initial="initial"
    animate={controls}
    variants={variants}
    custom={{ delay }}
    exit="exit"
  >
    <Snippet className="h-full w-full" />
  </motion.div>
);

Frame.propTypes = {
  snippet: PropTypes.func.isRequired,
  controls: PropTypes.object.isRequired,
  delay: PropTypes.object.isRequired,
  variants: PropTypes.object.isRequired,
};

Frame.defaultProps = {};

export default Frame;
