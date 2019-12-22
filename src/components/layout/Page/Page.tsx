import React from 'react';

import { Section, PageHeader, PageContent, PageFooter } from './styled';

interface Props {
  headerText?: string;
  children: React.ReactNode;
  FooterIcon?: React.ComponentType<any>;
  footerText?: string;
  className?: string;
}

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
