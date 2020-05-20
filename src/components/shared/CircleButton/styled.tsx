import styled from 'styled-components';

export const Button = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  background: ${(props) => props.theme.colors.tertiary};
  border-radius: 100%;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease-in-out;
  border: 0;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
  }
`;
