import React from 'react';

import { Container, Label, Text, CopyButton, CopyIcon } from './styled';

interface Props {
  label: string;
  children: React.ReactNode;
  canCopyText?: boolean;
  className?: string;
  icon?: React.ReactElement<any>;
}

const LabeledText: React.FC<Props> = ({
  label,
  children,
  canCopyText,
  className,
  icon,
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
          {icon &&
            React.cloneElement(icon, { className: 'labeled-text__copy-icon' })}
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
