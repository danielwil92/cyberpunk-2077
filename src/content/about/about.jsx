import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import HorizontalLine from '../../components/ui-system/misc/full-width/horizontal-line';
import Heading from '../../components/ui-system/atoms/typography/heading';
import Text from '../../components/ui-system/atoms/typography/text';
import './about.scss';
import HeadIntro from '../../components/ui-system/molecules/head-intro/head-intro';
import Button from '../../components/ui-system/atoms/buttons/buttons';

export default function About({
  headline, body, pillars, cta,
}) {
  const data = useStaticQuery(graphql`
      query {
          file(relativePath: { eq: "a-mercenary-on-the-rise.png" }) {
              childImageSharp {
                  fluid(maxWidth: 895, quality: 75) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return (
    <div className="about">
      <Heading text={headline} level="one" tag="h2" className="mod-text-align-center" />
      <Text text={body} className="about__text mod-text-align-center mod-spacer-2 mod-align-container-center" />
      <HorizontalLine spacer={4}>
        <Img
          className="about__image mod-align-container-center"
          fluid={data.file.childImageSharp.fluid}
          alt="V character alongside a car smoking a cigarette"
        />
      </HorizontalLine>
      <div className="about__pillars mod-spacer-2">
        {pillars.map((pillar) => (
          <HeadIntro
            key={pillar.id}
            color="yellow"
            isCentered
            headingLevel={pillar.id === 2 ? 'four' : 'six'}
            eyebrow={pillar.eyebrow}
            headline={pillar.headline}
          />
        ))}
      </div>
      <div className="mod-text-align-center mod-spacer-3">
        <Button type="primary" href={cta.link} label={cta.label} />
      </div>
    </div>
  );
}

About.propTypes = {
  headline: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  pillars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    eyebrow: PropTypes.string,
    headline: PropTypes.string,
  })).isRequired,
  cta: PropTypes.shape({
    link: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};
