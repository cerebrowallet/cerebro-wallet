import React from 'react';

import { Container, Label, Text, CopyButton, CopyIcon, Icon } from './styled';

interface Props {
  label: string;
  children: React.ReactNode;
  canCopyText?: boolean;
  className?: string;
  iconUrl?: string;
}

const LabeledText: React.FC<Props> = ({
  label,
  children,
  canCopyText,
  className,
  iconUrl,
}) => {
  return (
    <Container className={className} canCopyText={canCopyText}>
      <Label>{label}</Label>
      {canCopyText ? (
        <CopyButton>
          <CopyIcon />
          {children}
        </CopyButton>
      ) : (
        <Text>
          {iconUrl && <Icon src={iconUrl} />}
          {children}
        </Text>
      )}
    </Container>
  );
};

LabeledText.defaultProps = {
  canCopyText: false,
};

export default LabeledText;
