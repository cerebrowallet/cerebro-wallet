import styled from 'styled-components';
import { Copy } from 'react-feather';
import React from 'react';

interface ContainerProps {
  canCopyText: boolean;
  className?: string;
}

export const Container = styled.div`
  margin-bottom: 1.5625rem;
  padding-left: 1.5625rem;

  ${(props: ContainerProps) =>
    props.canCopyText &&
    `
    cursor: pointer;
  `}
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

export const CopyIcon = styled(Copy)`
  position: absolute;
  background: none;
  border: 0;
  left: -1.0625rem;
  top: 0.45rem;
  padding: 0;
  color: ${props => props.theme.colors.secondary};
  width: 0.75rem;
  height: 0.75rem;
`;

const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className }) => (
  <button type="button" className={className} onClick={() => {}}>
    {children}
  </button>
);

export const CopyButton: React.FC = props => (
  <Text as={Button} {...props}>
    {props.children}
  </Text>
);
