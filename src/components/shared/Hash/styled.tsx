import styled from 'styled-components';

interface SpanProps {
  truncate?: boolean;
  breakAll?: boolean;
}

export const Span = styled.span`
  ${(props: SpanProps) =>
    props.truncate &&
    `
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `}

  ${(props: SpanProps) =>
    props.breakAll &&
    `
    word-break: break-all;
  `}
  
  &:focus {
    outline: none;
  }
`;
