import styled from "styled-components";

export const Title = styled.h4`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  margin-bottom: 0.8125rem;
  color: ${props => props.theme.colors.secondary};
  font-weight: 400;
`;

export const Amount = styled.strong`
  display: block;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  margin-bottom: 0;
`;

export const AmountInLocalCurrency = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1.8125rem;
`;

export const Details = styled.dl`
  margin-bottom: 2.5625rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    margin-bottom: 1.4375rem;
  }

  dt {
    flex: 0 1 25%;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${props => props.theme.colors.secondary};
    margin-top: 0.22rem;
    margin-bottom: 0.625rem;
  }

  dd {
    flex: 0 1 75%;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 1.0625rem;
    word-break: break-all;

    @media (min-width: ${props => props.theme.breakpoints.sm}) {
      margin-bottom: 0.625rem;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  font-size: 0.75rem;
  line-height: 0.9375rem;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  font-weight: bold;
  border: 0;
  background: #fff;
  white-space: nowrap;
  padding: 0 1.25rem 0 0;
`;
