import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import content from '../../data/content/hero.json';
import Heading from '../../components/ui-system/atoms/typography/heading';
import Text from '../../components/ui-system/atoms/typography/text';
import Button from '../../components/ui-system/atoms/buttons/buttons';
import Icon from '../../components/ui-system/atoms/graphics/icon';
import './hero.scss';

export default function Hero() {
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
    <section className="hero wrapper wrapper--full-bleed-sm">
      <Img
        className="hero__image"
        fluid={data.file.childImageSharp.fluid}
        alt="V character holding a futuristic gun"
      />
      <div className="hero__tagline">
        <h1 className="hero__main-headline">
          <Heading text={content.headline.top} level="one" tag="span" />
          <Heading className="mod-text-align-right" text={content.headline.bottom} level="one" color="yellow" tag="span" />
        </h1>
        <div className="mod-text-align-right">
          <Text type="eyebrow" text={content.sub_headline} />
          <Button className="mod-spacer-2" type="secondary" href={content.cta.link} label={content.cta.label} />
        </div>
      </div>
      <div className="hero__supported-platforms mod-text-align-center">
        {content.supported_platforms.forEach((icon) => <Icon key={icon} icon={icon} className="hero__supported-platform" />)}
      </div>
    </section>
  );
}
