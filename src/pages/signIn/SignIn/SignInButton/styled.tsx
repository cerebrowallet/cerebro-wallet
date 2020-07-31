import styled from 'styled-components';

import { Breakpoints } from '../../../../dictionaries';
import { colors } from '../../../../styles/colors';

export const Button = styled.button`
  background: ${colors.black};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06),
    0 1px 0 #e5e5ec, 0 0 2px rgba(0, 0, 0, 0.08);
  border-radius: 0.25rem;
  padding: 0.75rem 0.9rem;
  font-weight: 600;
  color: ${colors.white};
  border: 0;
  display: flex;
  align-content: center;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.1s background-color ease-in;
  white-space: nowrap;
  margin: 0 auto;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${(props) => props.theme.colors.blue};
  }

  @media (min-width: ${Breakpoints.md}px) {
    width: 100%;
  }
`;

export const BlockstackLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.8125rem;
  vertical-align: middle;
`;
