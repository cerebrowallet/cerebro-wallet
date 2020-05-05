import styled from 'styled-components';
import { Button } from '../../../components/shared/CircleButton/styled';

export const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuMobileTriggerButton = styled(Button)`
  z-index: 101;

  &:focus {
    outline: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
