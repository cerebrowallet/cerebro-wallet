import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.15rem;
  padding: 0.375rem 0.625rem;
  transition: background-color 0.2s ease-in-out;
  border-radius: 1.5625rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;

  &:hover,
  &.active {
    background-color: ${(props) => props.theme.colors.secondaryExtraLight}};
  }
`;

export const Info = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Text = styled.span`
  padding-left: 0.625rem;
`;

export const Comment = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 0.625rem;
  line-height: 0.75rem;
  overflow: hidden;
`;
