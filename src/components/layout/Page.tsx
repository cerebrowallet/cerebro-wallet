import React from 'react';
import styled from 'styled-components';

interface Props {
  headerText?: string;
  children: React.ReactNode;
  FooterIcon?: React.ComponentType<any>;
  footerText?: string;
  className?: string;
}

const Section = styled.section`
  max-width: calc(100vw);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 36.25rem;
  }
`;

const PageHeader = styled.header`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
`;

const PageContent = styled.section`
  img {
    margin-bottom: 2.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin-bottom: 1.4375rem;
  }
`;

const PageFooter = styled.footer`
  position: relative;
  border-top: 1px solid #eaeaea;
  padding-top: 1.0625rem;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  padding-left: 1.5625rem;
  color: ${props => props.theme.colors.secondary};
  margin: 3.125rem 0;

  svg {
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    color: ${props => props.theme.colors.secondary};
    top: 1.21rem;
    left: 0.5rem;
  }
`;

const Page: React.FC<Props> = ({
  headerText,
  children,
  FooterIcon,
  footerText,
  className,
}) => {
  return (
    <Section className={className}>
      {headerText && <PageHeader>{headerText}</PageHeader>}
      <PageContent>{children}</PageContent>
      {footerText && (
        <PageFooter>
          {FooterIcon && <FooterIcon />}
          {footerText}
        </PageFooter>
      )}
    </Section>
  );
};

export default Page;
