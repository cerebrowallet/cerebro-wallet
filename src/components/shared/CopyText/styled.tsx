import React from 'react';
import styled from 'styled-components';
import { Copy } from 'react-feather';

export const Container = styled.span`
  position: relative;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const CopyIcon = styled(({ isHovered, ...rest }) => <Copy {...rest} />)`
  position: absolute;
  background: none;
  border: 0;
  left: -1.0625rem;
  top: 0.25rem;
  padding: 0;
  color: ${(props) => props.theme.colors.secondary};
  width: 0.75rem;
  height: 0.75rem;
  transition: opacity 0.15s ease-in;
  opacity: ${(props: { isHovered: boolean }) => (props.isHovered ? 1 : 0)};
`;
