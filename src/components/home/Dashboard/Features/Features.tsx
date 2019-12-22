import React from 'react';

import { FEATURES } from '../../../../menus';

import IconButton from '../../../shared/IconButton/IconButton';
import { FeaturesContainer } from './styled';

const Features: React.FC = () => {
  return (
    <FeaturesContainer>
      {FEATURES.map(feature => (
        <IconButton
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
