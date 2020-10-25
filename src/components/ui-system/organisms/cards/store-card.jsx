import React from 'react';
import PropTypes from 'prop-types';
import './store-card.scss';
import Heading from '../../atoms/typography/heading';
import Text from '../../atoms/typography/text';
import Button from '../../atoms/buttons/buttons';

export default function StoreCard({
  image, headline, eyebrow, cta,
}) {
  return (
    <figure className="store-card">
      <img src={`/products/${image}`} alt="Rating Mature" className="store-card__image" />
      <figcaption className="store-card__caption">
        <Text text={eyebrow} type="eyebrow" />
        <Heading
          text={headline}
          level="five"
          color="white"
          tag="h2"
          className="mod-spacer-1"
        />
        <Button className="mod-spacer-2" type="secondary" href={cta.link} label={cta.label} />
      </figcaption>
    </figure>
  );
}

StoreCard.propTypes = {
  cta: PropTypes.shape({
    link: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  eyebrow: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
