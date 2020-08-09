import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Heading from '../../components/ui-system/atoms/typography/heading';
import Text from '../../components/ui-system/atoms/typography/text';
import Button from '../../components/ui-system/atoms/buttons/buttons';
import Icon from '../../components/ui-system/atoms/graphics/icon';
import './hero.scss';

export default function Hero({
  headline, subheading, cta, supportedPlatforms,
}) {
  const data = useStaticQuery(graphql`
      query {
          file(relativePath: { eq: "images/first-section-cover.png" }) {
              childImageSharp {
                  fluid(maxWidth: 840, quality: 75) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return (
    <div className="hero">
      <Img
        className="hero__image"
        fluid={data.file.childImageSharp.fluid}
        alt="V character holding a futuristic gun"
      />
      <div className="hero__tagline">
        <h1 className="hero__main-headline">
          <Heading text={headline.top} level="one" tag="span" />
          <Heading className="mod-text-align-right" text={headline.bottom} level="one" color="yellow" tag="span" />
        </h1>
        <div className="mod-text-align-right">
          <Text type="eyebrow" text={subheading} color="white" />
          <Button className="mod-spacer-2" type="secondary" href={cta.link} label={cta.label} />
        </div>
      </div>
      <div className="hero__supported-platforms mod-text-align-center">
        {supportedPlatforms.map((icon) => <Icon key={icon} icon={icon} className="hero__supported-platform" />)}
      </div>
    </div>
  );
}

Hero.propTypes = {
  headline: PropTypes.shape({
    top: PropTypes.string,
    bottom: PropTypes.string,
  }),
  subheading: PropTypes.string,
  cta: PropTypes.shape({
    link: PropTypes.string,
    label: PropTypes.string,
  }),
  supportedPlatforms: PropTypes.arrayOf(PropTypes.string),
};

Hero.defaultProps = {
  headline: { top: '', bottom: '' },
  subheading: '',
  cta: { label: '', link: '' },
  supportedPlatforms: [''],
};
