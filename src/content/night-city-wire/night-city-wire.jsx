import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PlayIcon from '../../../assets/icons/play-icon.svg';
import HeadIntro from '../../components/ui-system/molecules/head-intro/head-intro';
import Heading from '../../components/ui-system/atoms/typography/heading';
import Button from '../../components/ui-system/atoms/buttons/buttons';
import './night-city-wire.scss';

export default function NightCityWire({
  headIntro, episode, cta,
}) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "night-city-wire-background.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="night-city-wire">
      <HeadIntro
        color="white"
        isCentered
        headingLevel="three"
        eyebrowPosition="bottom"
        eyebrow={headIntro.eyebrow}
        headline={headIntro.headline}
      />
      <a href={episode.link} target="_blank" rel="noopener noreferrer" className="night-city-wire__episode mod-spacer-4">
        <span className="night-city-wire__watch mod-text-align-center">
          <PlayIcon />
          <Heading level="six" text={`Watch the ${episode.number} Episode`} color="white" />
        </span>
        <Img
          className="night-city-wire__image"
          fluid={data.file.childImageSharp.fluid}
          alt="Bad guy making a fist with his hand, sitting on a chair and with a scar on his face"
        />
      </a>
      <div className="night-city-wire__logo">
        <img src="/night-city-wire-logo@2x.png" alt="NightCity Wire Logo" className="cyberpunk-logo" />
      </div>
      <div className="mod-text-align-center mod-spacer-3">
        <Button type="primary" href={cta.link} label={cta.label} />
      </div>
    </div>
  );
}

NightCityWire.propTypes = {
  headIntro: PropTypes.shape({
    eyebrow: PropTypes.string,
    headline: PropTypes.string,
  }).isRequired,
  episode: PropTypes.shape({
    number: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  cta: PropTypes.shape({
    link: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};
