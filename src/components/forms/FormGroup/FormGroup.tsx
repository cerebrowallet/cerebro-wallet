import React from 'react';

import { Wrapper, Label } from './styled';

interface Props {
  label: string;
  labelContent?: React.ComponentType | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  noMarginBottom?: boolean;
}

const FormGroup: React.FC<Props> = ({
  label,
  labelContent,
  children,
  className,
  noMarginBottom,
}) => {
  return (
    <Wrapper className={className} noMarginBottom={noMarginBottom}>
      <Label>
        {label}
        {labelContent}
      </Label>
      {children}
    </Wrapper>
  );
};

export default FormGroup;
