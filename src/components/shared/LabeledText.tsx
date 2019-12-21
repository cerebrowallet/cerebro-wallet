import React from 'react';
import styled from 'styled-components';

import { Copy } from 'react-feather';

interface Props {
  label: string;
  children: React.ReactNode;
  canCopyText?: boolean;
  className?: string;
  icon?: React.ReactElement<any>;
}

interface WrapperProps {
  canCopyText: boolean;
  className?: string;
}

const Wrapper = styled.div`
  margin-bottom: 1.5625rem;
  padding-left: 1.5625rem;

  ${(props: WrapperProps) =>
    props.canCopyText &&
    `
    cursor: pointer;
  `}
` as any;

const Label = styled.label`
  display: block;
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: ${props => props.theme.colors.secondary};
`;

const Text = styled.span`
  position: relative;
  display: block;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${props => props.theme.colors.primary};
  padding: 0;
  background: none;
  border: 0;
  text-align: left;
`;

const CopyIcon = styled(Copy)`
  position: absolute;
  background: none;
  border: 0;
  left: -1.0625rem;
  top: 0.45rem;
  padding: 0;
  color: ${props => props.theme.colors.secondary};
  width: 0.75rem;
  height: 0.75rem;
`;

interface CopyButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({ children, className }) => (
  <button type="button" className={className} onClick={() => {}}>
    {children}
  </button>
);

const LabeledText: React.FC<Props> = ({
  label,
  children,
  canCopyText,
  className,
  icon,
}) => {
  return (
    <Wrapper className={className} canCopyText={canCopyText}>
      <Label>{label}</Label>
      {canCopyText ? (
        <Text as={CopyButton}>
          <CopyIcon />
          {children}
        </Text>
      ) : (
        <Text>
          {icon &&
            React.cloneElement(icon, { className: 'labeled-text__copy-icon' })}
          {children}
        </Text>
      )}
    </Wrapper>
  );
};

LabeledText.defaultProps = {
  canCopyText: false,
};

export default LabeledText;
