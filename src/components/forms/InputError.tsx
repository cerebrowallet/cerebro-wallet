import styled from 'styled-components';

export const InputError = styled.span`
  display: block;
  position: absolute;
  left: 0;
  top: 100%;
  opacity: 0;
  color: ${props => props.theme.colors.alt2};
  font-size: 0.75rem;
  line-height: 1rem;
  margin-top: 0.0625rem;
  transition: opacity 0.15s ease-in;
`;
