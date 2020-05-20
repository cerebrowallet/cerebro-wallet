import styled from 'styled-components';

export const Button = styled.button`
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

interface AvatarProps {
  avatarUrl?: string;
}

export const UserPic = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.tertiary};

  ${(props: AvatarProps) =>
    props.avatarUrl &&
    `
    background-image: url(${props.avatarUrl});
  `}
`;
