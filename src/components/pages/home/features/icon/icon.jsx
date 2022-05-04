import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useRive } from 'rive-react';

const Icon = ({ isSectionInView, iconName }) => {
  const { RiveComponent, rive } = useRive({
    src: '/animations/pages/features/icons.riv',
    animations: iconName,
    autoplay: false,
    artboard: iconName,
  });
  useEffect(() => {
    if (isSectionInView && rive) {
      rive.play([iconName]);
    }
  }, [isSectionInView, rive, iconName]);

  return <RiveComponent className="h-[88px] w-[88px] md:h-20 md:w-20 sm:h-16 sm:w-16" />;
};

Icon.propTypes = {
  isSectionInView: PropTypes.bool.isRequired,
  iconName: PropTypes.string.isRequired,
};

Icon.defaultProps = {};

export default Icon;
