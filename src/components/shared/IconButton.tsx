import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  link?: string;
  onClick?: () => void;
  icon: React.ReactElement<any>;
  text: string;
  descText: string;
  className?: string;
  children?: React.ReactNode;
}

export const StyledButton = styled.button`
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

const ButtonName = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 600;
`;

const ButtonDesc = styled.span`
  display: block;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: ${props => props.theme.colors.secondary};
  font-weight: 400;
`;

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className: string;
}

const Link: React.FC<NavLinkProps> = props => (
  <NavLink {...props}>{props.children}</NavLink>
);

interface LinkExtProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

const LinkExt: React.FC<LinkExtProps> = props => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

const IconMenuIcon: React.FC<Props> = ({
  link,
  onClick,
  text,
  descText,
  icon,
  children,
  className,
}) => {
  if (!link && !onClick) {
    return null;
  }

  const content = (
    <>
      {icon}
      <ButtonName>
        {text}
        <ButtonDesc>{descText}</ButtonDesc>
      </ButtonName>
      {children}
    </>
  );

  if (link) {
    if (link.indexOf('://') > 0) {
      return (
        <StyledButton as={LinkExt} className={className || ''} href={link}>
          {content}
        </StyledButton>
      );
    }

    return (
      <StyledButton as={Link} className={className || ''} to={link}>
        {content}
      </StyledButton>
    );
  }

  return (
    <StyledButton type="button" onClick={onClick} className={className}>
      {content}
    </StyledButton>
  );
};

export default IconMenuIcon;
