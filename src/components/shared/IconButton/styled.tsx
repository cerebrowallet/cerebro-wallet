import styled from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: left;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 0.875rem 1.1875rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  border-radius: 1.25rem;
  transition: background 0.15s ease-in;
  width: 100%;

  &:hover,
  &.active {
    background: ${props => props.theme.colors.background};
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.9375rem;
  }
`;

export const Text = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 600;
`;

export const Description = styled.span`
  display: block;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: ${props => props.theme.colors.secondary};
  font-weight: 400;
`;

export const RouterLink: React.FC<{
  to: string;
  children: React.ReactNode;
  className?: string;
}> = props => (
  <Button as={NavLink} {...props}>
    {props.children}
  </Button>
);

const HtmlLink: React.FC = props => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

export const ExternalLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
}> = props => (
  <Button as={HtmlLink} {...props}>
    {props.children}
  </Button>
);
