import React from 'react';

import './Page.scss';

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
    <section className={`page${className ? ` ${className}` : ''}`}>
      {headerText && <header className="page__header">{headerText}</header>}
      <section className="page__content">{children}</section>
      {footerText && (
        <footer className="page__footer">
          {FooterIcon && <FooterIcon className="page__footer-icon" />}
          {footerText}
        </footer>
      )}
    </section>
  );
};

export default Page;
