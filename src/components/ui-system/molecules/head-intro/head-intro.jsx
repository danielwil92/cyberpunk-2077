import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/typography/heading';
import Text from '../../atoms/typography/text';
import HeadingDefaults from '../../../../constants/heading';

export default function HeadIntro({
  headline, eyebrow, headingLevel, color, isCentered, eyebrowPosition,
}) {
  const EyebrowPositionTop = eyebrowPosition === 'top';
  const Eyebrow = <Text text={eyebrow} type="eyebrow" className={`head-intro__eyebrow ${!EyebrowPositionTop ? 'mod-spacer-1 ' : ''}`} />;

  return (
    <div className={`head-intro
      ${isCentered ? 'mod-text-align-center' : ''}`}
    >
      {EyebrowPositionTop ? Eyebrow : '' }
      <Heading
        text={headline}
        level={headingLevel}
        color={color}
        tag="h2"
        className={`head-intro__heading
        ${EyebrowPositionTop ? 'mod-spacer-1' : ''}`}
      />
      {!EyebrowPositionTop ? Eyebrow : '' }
    </div>
  );
}

HeadIntro.propTypes = {
  headline: PropTypes.string,
  eyebrow: PropTypes.string,
  color: PropTypes.string.isRequired,
  headingLevel: PropTypes.oneOf(HeadingDefaults),
  eyebrowPosition: PropTypes.oneOf(['top', 'bottom']),
  isCentered: PropTypes.bool,
};

HeadIntro.defaultProps = {
  headline: '',
  eyebrow: '',
  eyebrowPosition: 'top',
  headingLevel: 'two',
  isCentered: false,
};
