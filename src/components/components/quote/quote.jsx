import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../ui-system/atoms/typography/heading';
import './quote.scss';

export default function Quote({
  quotes,
}) {
  const [activeQuote, setActiveQuote] = useState(quotes[1]);

  return (
    <div className="quote">
      <Heading
        text={`“${activeQuote.quote}”`}
        level="two"
        color="white"
        className="mod-text-align-center quote__quote"
      />

      <ul className="quote__row mod-spacer-3">
        { quotes.map((quote) => (
          <li key={quote.id} className="quote__item">
            <button
              type="button"
              className={`quote__toggle
                ${activeQuote.author === quote.author ? 'quote__toggle--active' : ''} `}
              onClick={() => setActiveQuote(quote)}
            >
              <img src={`/reviewers-logos/${quote.author}.svg`} alt={`${quote.author} Logo`} />
            </button>
          </li>
        )) }
      </ul>
    </div>
  );
}

Quote.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      quote: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};
