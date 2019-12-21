import React from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  children: React.ReactNode;
  className?: string;
  noMarginBottom?: boolean;
}

interface WrapperProps {
  noMarginBottom?: boolean;
}

const Wrapper = styled.div`
  margin-bottom: ${(props: WrapperProps) =>
    props.noMarginBottom ? 0 : '1.45rem'};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: ${props => props.theme.colors.secondary};
`;

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
