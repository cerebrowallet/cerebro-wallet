import React from 'react';

import { FEATURES } from '../../../../menus';

import { FeaturesContainer, FeatureButton } from './styled';

const Features: React.FC = () => {
  return (
    <FeaturesContainer>
      {FEATURES.map(feature => (
        <FeatureButton
          key={feature.link}
          link={feature.link}
          text={feature.text}
          descText={feature.descText}
          icon={<feature.icon />}
        />
      ))}
    </FeaturesContainer>
  );
};

export default Features;
