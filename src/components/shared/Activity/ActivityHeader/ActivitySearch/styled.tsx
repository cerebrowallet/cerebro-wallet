import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0.75rem;
    right: 0.938rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  background: none;
  border: 0;
  text-align: left;
  padding: 0 1.25rem;

  &:focus {
    outline: none;
  }
`;
