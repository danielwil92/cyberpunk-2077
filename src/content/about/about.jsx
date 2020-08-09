import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import HorizontalLine from '../../components/ui-system/misc/full-width/horizontal-line';
import Heading from '../../components/ui-system/atoms/typography/heading';
import Text from '../../components/ui-system/atoms/typography/text';
import './about.scss';

export default function About({
  headline, body,
}) {
  const data = useStaticQuery(graphql`
      query {
          file(relativePath: { eq: "images/a-mercenary-on-the-rise.png" }) {
              childImageSharp {
                  fluid(maxWidth: 840, quality: 75) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return (
    <div className="about">
      <Heading text={headline} level="one" tag="h2" className="mod-text-align-center" />
      <Text text={body} className="about__text mod-text-align-center mod-spacer-2" />
      <div className="about__line mod-spacer-4">
        <HorizontalLine>
          <Img
            className="about__image"
            fluid={data.file.childImageSharp.fluid}
            alt="V character alongside a car smoking a cigarette"
          />
        </HorizontalLine>
      </div>
    </div>
  );
}

About.propTypes = {
  headline: PropTypes.string,
  body: PropTypes.string,
};

About.defaultProps = {
  headline: '',
  body: '',
};
