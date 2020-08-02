import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from '../../components/ui-system/atoms/typography/heading';
import content from '../../data/content/hero.json';
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
    <section className="hero wrapper">
      <Img
        className="hero__image"
        fluid={data.file.childImageSharp.fluid}
        alt="A corgi smiling happily"
      />
      <h1 className="hero__main-headline">
        <Heading text={content.headline.top} level="one" tag="span" />
        <Heading className="mod-text-align-right" text={content.headline.bottom} level="one" color="yellow" tag="span" />
      </h1>
    </section>
  );
}
