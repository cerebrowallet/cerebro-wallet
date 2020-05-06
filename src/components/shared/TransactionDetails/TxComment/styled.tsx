import styled from 'styled-components';

export const Input = styled.input`
  border: 0;
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
  line-height: 1.4;

  &:focus {
    outline: none;
  }
`;
