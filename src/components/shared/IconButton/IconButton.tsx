import React from 'react';

import EyeIconSrc from '../../../images/eye-icon.svg';

import {
  Button,
  Text,
  Description,
  RouterLink,
  ExternalLink,
  Icon,
  ReadOnlyIcon,
  Title,
  EyeIcon
} from './styled';

interface Props {
  link?: string;
  onClick?: () => void;
  icon: React.ReactElement<any>;
  text: string;
  descText: string;
  className?: string;
  children?: React.ReactNode;
  style?: any;
  readonly?: boolean;
}

const IconButton: React.FC<Props> = ({
  link,
  onClick,
  text,
  descText,
  icon,
  children,
  className,
  style,
  readonly,
}) => {
  if (!link && !onClick) {
    return null;
  }

  const content = (
    <>
      <Icon>
        {icon}
        {readonly && (
          <ReadOnlyIcon>
            <EyeIcon src={EyeIconSrc} />
          </ReadOnlyIcon>
        )}
      </Icon>
      <Text>
        <Title>{text}</Title>
        <Description>{descText}</Description>
      </Text>
      {children}
    </>
  );

  if (link) {
    if (link.indexOf('://') > 0) {
      return (
        <ExternalLink className={className || ''} href={link} style={style}>
          {content}
        </ExternalLink>
      );
    }

    return (
      <RouterLink className={className || ''} to={link} style={style}>
        {content}
      </RouterLink>
    );
  }

  return (
    <Button type="button" onClick={onClick} className={className} style={style}>
      {content}
    </Button>
  );
};

export default IconButton;
