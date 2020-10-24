import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Quote from '../../components/components/quote/quote';
import './reviews.scss';

export default function Reviews({
  quotes,
}) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mercenary-holding-a-gun.png" }) {
        childImageSharp {
          fluid(maxWidth: 840, quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="reviews">
      <Img
        className="reviews__image"
        fluid={data.file.childImageSharp.fluid}
        alt="Mercenary character holding a futuristic gun"
      />
      <div className="reviews__quotes">
        <Quote quotes={quotes} />
      </div>
    </div>
  );
}

Reviews.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      quote: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};
