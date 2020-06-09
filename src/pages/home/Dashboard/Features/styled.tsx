import styled from 'styled-components';

import { Breakpoints } from '../../../../dictionaries';
import IconButton from '../../../../components/shared/IconButton/IconButton';

export const FeaturesContainer = styled.div`
  display: grid;
  grid-area: features-menu;

  @media (min-width: ${Breakpoints.md}px) {
    grid-template-columns: 15.3125rem 15.3125rem;
  }
`;

export const FeatureButton = styled(IconButton)`
  &.active,
  &:hover {
    background: ${(props) => props.theme.colors.secondaryLight};
  }
`
