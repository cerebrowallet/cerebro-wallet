import styled from 'styled-components';
import React from 'react';

export const Container = styled.div`
  margin-bottom: 1.5625rem;
  padding-left: 1.5625rem;
` as any;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: ${props => props.theme.colors.secondary};
`;

export const Text = styled.span`
  position: relative;
  display: block;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${props => props.theme.colors.primary};
  padding: 0;
  background: none;
  border: 0;
  text-align: left;
`;

export const Icon = styled.img`
  position: absolute;
  border: 0;
  left: -1.0625rem;
  top: 0.45rem;
  padding: 0;
  width: 0.75rem;
  height: 0.75rem;

  ${(props: { src: string }) => `
    background: url(${props.src}) center center no-repeat;
    background-size: cover;
  `}
`;
