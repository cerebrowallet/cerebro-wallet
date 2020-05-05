import React from 'react';

import { Container, Header, Content, Footer } from './styled';

interface Props {
  headerText?: string;
  children: React.ReactNode;
  FooterIcon?: React.ComponentType<any>;
  footerText?: string;
  className?: string;
}

const PageContent: React.FC<Props> = ({
  headerText,
  children,
  FooterIcon,
  footerText,
  className,
}) => {
  return (
    <Container className={className}>
      {headerText && <Header>{headerText}</Header>}
      <Content>{children}</Content>
      {footerText && (
        <Footer>
          {FooterIcon && <FooterIcon />}
          {footerText}
        </Footer>
      )}
    </Container>
  );
};

export default PageContent;
