import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  width: 8rem;
  height: 8rem;
  background: none;
  border: 0;
  margin-bottom: 3.125rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.65rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  z-index: 2;
  background: ${(props) => props.theme.colors.primary};

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.7rem;
    height: 0.7rem;
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const AvatarContainer = styled.div`
  width: 8rem;
  height: 8rem;
`
