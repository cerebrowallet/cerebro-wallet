import React from 'react';
import styled from 'styled-components';

import IconMenuItem from '../../shared/IconButton';

import { FEATURES } from '../../../menus';

const DashboardFeatures = styled.div`
  display: grid;
  grid-area: features-menu;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 15.3125rem 15.3125rem;
  }
`;

const Features: React.FC = () => {
  return (
    <DashboardFeatures>
      {FEATURES.map(feature => (
        <IconMenuItem
          key={feature.link}
          link={feature.link}
          text={feature.text}
          descText={feature.descText}
          icon={<feature.icon />}
        />
      ))}
    </DashboardFeatures>
  );
};

export default Features;
