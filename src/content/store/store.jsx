import React from 'react';
import PropTypes from 'prop-types';
import HorizontalLine from '../../components/ui-system/misc/full-width/horizontal-line';
import './store.scss';
import HeadIntro from '../../components/ui-system/molecules/head-intro/head-intro';
import StoreCardRow from '../../components/components/store-card-row/store-card-row';
import Button from '../../components/ui-system/atoms/buttons/buttons';

export default function Store({
  headIntro, items, cta,
}) {
  return (
    <div className="store">
      <HeadIntro
        color="yellow"
        isCentered
        headingLevel="four"
        eyebrow={headIntro.eyebrow}
        headline={headIntro.headline}
      />
      <HorizontalLine spacer={4}>
        <StoreCardRow
          items={items}
        />
      </HorizontalLine>
      <div className="mod-text-align-center mod-spacer-5">
        <Button type="primary" href={cta.link} label={cta.label} />
      </div>
    </div>
  );
}

Store.propTypes = {
  headIntro: PropTypes.shape({
    eyebrow: PropTypes.string,
    headline: PropTypes.string,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    eyebrow: PropTypes.string,
    name: PropTypes.string,
    cta: PropTypes.shape({
      link: PropTypes.string,
      label: PropTypes.string,
    }),
  })).isRequired,
  cta: PropTypes.shape({
    link: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};
