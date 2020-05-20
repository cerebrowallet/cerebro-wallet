import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  padding: 0.375rem 0.625rem;
  border-radius: 0.125rem;
  background: ${(props) => props.theme.colors.secondaryExtraLight};
  font-size: 0.65rem;
  line-height: 1;
`;

export const Date = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0.25rem;
`;

export const Price = styled.div`
  margin-bottom: 0.1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PriceValue = styled.span`
  font-weight: 600;
`;
