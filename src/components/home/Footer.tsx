import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-area: footer;
  display: none;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: ${props => props.theme.colors.secondary};
  align-self: start;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    display: flex;
  }
`;

const FooterMenuItem = styled.a`
  text-decoration: none;
  margin-right: 1.5625rem;
  color: ${props => props.theme.colors.secondary};

  &:last-child {
    margin-right: 0;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div>&copy; 2019 Cerebro Team</div>
      <nav className="footer__menu">
        <FooterMenuItem href="#">Show Guide</FooterMenuItem>
        <FooterMenuItem href="#">Changelog</FooterMenuItem>
        <FooterMenuItem href="#">Blog</FooterMenuItem>
        <FooterMenuItem href="#">Notice</FooterMenuItem>
      </nav>
    </StyledFooter>
  );
};

export default Footer;
