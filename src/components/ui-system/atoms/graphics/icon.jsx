import React from 'react';
import PropTypes from 'prop-types';
import XboxOne from '../../../../../assets/icons/gaming-platforms/xbox-one.svg';
import PS4 from '../../../../../assets/icons/gaming-platforms/ps-4.svg';
import PC from '../../../../../assets/icons/gaming-platforms/pc.svg';
import Stadia from '../../../../../assets/icons/gaming-platforms/stadia.svg';
import CDForums from '../../../../../assets/icons/social-networks/cd-forums.svg';
import Discord from '../../../../../assets/icons/social-networks/discord.svg';
import Facebook from '../../../../../assets/icons/social-networks/facebook.svg';
import Instagram from '../../../../../assets/icons/social-networks/instagram.svg';
import Tumblr from '../../../../../assets/icons/social-networks/tumblr.svg';
import Twitch from '../../../../../assets/icons/social-networks/twitch.svg';
import Twitter from '../../../../../assets/icons/social-networks/twitter.svg';
import Youtube from '../../../../../assets/icons/social-networks/youtube.svg';
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
    case 'cd-forums':
      iconSVG = <CDForums />;
      break;
    case 'discord':
      iconSVG = <Discord />;
      break;
    case 'facebook':
      iconSVG = <Facebook />;
      break;
    case 'instagram':
      iconSVG = <Instagram />;
      break;
    case 'tumblr':
      iconSVG = <Tumblr />;
      break;
    case 'twitch':
      iconSVG = <Twitch />;
      break;
    case 'twitter':
      iconSVG = <Twitter />;
      break;
    case 'youtube':
      iconSVG = <Youtube />;
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
