import React from 'react';
import SocialNetworksContent from '../../../data/content/common/social-networks.json';
import Icon from '../../ui-system/atoms/graphics/icon';
import './social-networks.scss';

export default function SocialNetworks() {
  return (
    <ul className="social-networks mod-text-align-center">
      {SocialNetworksContent.social.map((network) => (
        <li className="social-networks__items">
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <Icon
              key={network.name}
              icon={network.name}
              className="social-networks__icon"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
