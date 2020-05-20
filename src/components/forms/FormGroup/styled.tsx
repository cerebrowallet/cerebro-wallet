import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: ${(props: { noMarginBottom?: boolean }) =>
    props.noMarginBottom ? 0 : '1.45rem'};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: ${(props) => props.theme.colors.secondary};
`;
