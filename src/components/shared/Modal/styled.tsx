import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${(props: { showModal: boolean }) =>
    props.showModal ? 'block' : 'none'};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 105;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.primary};
    opacity: 0.4;
  }
`;

export const Body = styled.div`
  position: absolute;
  background: ${props => props.theme.colors.blockBackground};
  padding: 1.5625rem;
  border-radius: 1.25rem;
  margin-top: 2.5rem;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: calc(100% - 2.5rem);

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    max-width: 25rem;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
