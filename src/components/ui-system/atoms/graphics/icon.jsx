import React from 'react';
import PropTypes from 'prop-types';
import XboxOne from '../../../../../assets/icons/platforms-logos/xbox-one.svg';
import PS4 from '../../../../../assets/icons/platforms-logos/ps-4.svg';
import PC from '../../../../../assets/icons/platforms-logos/pc.svg';
import Stadia from '../../../../../assets/icons/platforms-logos/stadia.svg';
import './icon.scss';

export default function Icon({
  icon, color, className,
}) {
  const iconClassName = 'cyberpunk-icon';
  let cssClass = iconClassName;

  if (color) {
    cssClass += ` ${iconClassName}--color-${color}`;
  }

  if (className) {
    cssClass += ` ${className}`;
  }

  let iconSVG;

  // eslint-disable-next-line default-case
  switch (icon) {
    case 'xbox-one':
      iconSVG = <XboxOne />;
      break;
    case 'ps4':
      iconSVG = <PS4 />;
      break;
    case 'pc':
      iconSVG = <PC />;
      break;
    case 'stadia':
      iconSVG = <Stadia />;
      break;
  }

  return (
    <div className={cssClass}>
      {iconSVG || <i>add name for supported icon</i>}
    </div>
  );
}

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  color: 'white',
  className: '',
  icon: '',
};
