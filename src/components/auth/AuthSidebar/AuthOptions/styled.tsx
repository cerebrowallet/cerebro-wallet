import styled from 'styled-components';

import { Theme } from '../../../../utils/styled';

export const Wrapper = styled.div`
  margin-bottom: 1.875rem;
  max-width: 25rem;
`;

export const Controls = styled.nav`
  margin-bottom: 1.5625rem;
`;

interface ElementProps {
  theme?: Theme;
  active: boolean;
}

export const Control = styled.button`
  display: inline-block;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  background: none;
  border: 0;
  color: ${props => props.theme && props.theme.colors.secondary};
  padding: 0;
  cursor: pointer;
  transition: all 0.15s ease-in;

  &:first-child {
    margin-right: 0.9375rem;
  }

  &:focus {
    outline: none;
  }

  ${(props: ElementProps) =>
    props.active &&
    `
    color: ${props.theme && props.theme.colors.primary};
    font-weight: bold;
    cursor: default;
  `};
`;

export const OptionsWrapper = styled.div`
  position: relative;
  height: 11.875rem;
`;
