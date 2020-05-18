import styled from 'styled-components';

export const Container = styled.span`
  line-height: 1;
`

export const ColorDot = styled.span`
  position: relative;
  display: inline-block;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 100%;
  background: ${(props: { color: string; }) => props.color};
  opacity: 0.2;
  top: -0.0625rem;
  margin-right: 0.3125rem;
`;

export const Name = styled.span`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
`

export const Coin = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.secondary};
  margin-left: 0.1875rem;
`
