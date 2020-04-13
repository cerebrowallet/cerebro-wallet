import styled from 'styled-components';
import Sidebar from '../../layout/Sidebar';
import GoBackButton from '../../shared/GoBackButton/GoBackButton';

export const AccountSidebar = styled(Sidebar)`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    background: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    background: ${props => props.theme.colors.blockBackground};
  }
`;

export const AccountGoBackButton = styled(GoBackButton)`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    top: 1.25rem;
    right: 0.625rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    top: 2.625rem;
    right: 1.25rem;
  }
`;
