import React from 'react';

import { Wrapper, Label } from './styled';

interface Props {
  label: string;
  children: React.ReactNode;
  className?: string;
  noMarginBottom?: boolean;
}

const FormGroup: React.FC<Props> = ({
  label,
  children,
  className,
  noMarginBottom,
}) => {
  return (
    <Wrapper className={className} noMarginBottom={noMarginBottom}>
      <Label>{label}</Label>
      {children}
    </Wrapper>
  );
};

export default FormGroup;
