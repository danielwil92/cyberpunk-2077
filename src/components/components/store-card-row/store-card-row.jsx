import React from 'react';
import PropTypes from 'prop-types';
import './store-card-row.scss';
import StoreCard from '../../ui-system/organisms/cards/store-card';

export default function StoreCardRow({
  items,
}) {
  return (
    <div className="store-card-row">
      { items.map((item) => (
        <div className="store-card-row__item">
          <StoreCard
            eyebrow={item.eyebrow}
            headline={item.name}
            cta={item.cta}
          />
        </div>
      )) }
    </div>
  );
}

StoreCardRow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    eyebrow: PropTypes.string,
    name: PropTypes.string,
    cta: PropTypes.shape({
      link: PropTypes.string,
      label: PropTypes.string,
    }),
  })).isRequired,
};
