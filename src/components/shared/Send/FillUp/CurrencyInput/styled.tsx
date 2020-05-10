import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const CurrencySign = styled.span`
  position: absolute;
    display: inline-block;
    top: 50%;
    right: 1.25rem;
    transform: translateY(-50%);
    text-transform: uppercase;
    color: ${props => props.theme.colors.secondary};
    font-size: 1rem;
    line-height: 1.5rem;
`
