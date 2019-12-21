import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  className?: string;
  truncate?: boolean;
  breakAll?: boolean;
}

const Span = styled.span`
  ${(props: Props) =>
    props.truncate &&
    `
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `}

  ${(props: Props) =>
    props.breakAll &&
    `
    word-break: break-all;
  `}
`;

// TODO truncate text in the middle
const HashText: React.FC<Props> = ({
  children,
  className,
  truncate,
  breakAll,
}) => {
  return (
    <Span className={className} truncate={truncate} breakAll={breakAll}>
      {children}
    </Span>
  );
};

export default HashText;
