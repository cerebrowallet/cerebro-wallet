import React from 'react';

import { Button, Text, Description, RouterLink, ExternalLink } from './styled';

interface Props {
  link?: string;
  onClick?: () => void;
  icon: React.ReactElement<any>;
  text: string;
  descText: string;
  className?: string;
  children?: React.ReactNode;
}

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
      <Text>
        {text}
        <Description>{descText}</Description>
      </Text>
      {children}
    </>
  );

  if (link) {
    if (link.indexOf('://') > 0) {
      return (
        <ExternalLink className={className || ''} href={link}>
          {content}
        </ExternalLink>
      );
    }

    return (
      <RouterLink className={className || ''} to={link}>
        {content}
      </RouterLink>
    );
  }

  return (
    <Button type="button" onClick={onClick} className={className}>
      {content}
    </Button>
  );
};

export default IconMenuIcon;
