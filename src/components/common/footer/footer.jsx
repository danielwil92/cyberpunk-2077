import React from 'react';
import './footer.scss';
import CDProjektRedLogo from '../logo/projekt-red';
import SocialNetworks from '../social-networks/social-networks';
import FooterContent from '../../../data/content/common/footer.json';

export default function Footer() {
  return (
    <footer className="cyberpunk-footer mod-spacer-6">
      <SocialNetworks />
      <div className="mod-spacer-3">
        <CDProjektRedLogo />
      </div>
      <ul className="mod-text-align-center mod-spacer-3">
        {FooterContent.useful_links.map((link) => (
          <li className="cyberpunk-footer__item">
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
          </li>
        ))}
      </ul>
      <p className="cyberpunk-footer__copyright mod-text-align-center mod-spacer-3">{FooterContent.copyright}</p>
      <img src="/game-rating-notice.png" alt="Rating Mature" className="cyberpunk-footer__rating" />
    </footer>
  );
}
