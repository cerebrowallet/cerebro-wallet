import React from 'react';

import { Container, Label, Text, Icon } from './styled';

interface Props {
  label: string;
  children: React.ReactNode;
  className?: string;
  iconUrl?: string;
}

const LabeledText: React.FC<Props> = ({
  label,
  children,
  className,
  iconUrl,
}) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      <Text>
        {iconUrl && <Icon src={iconUrl} />}
        {children}
      </Text>
    </Container>
  );
};

export default LabeledText;
