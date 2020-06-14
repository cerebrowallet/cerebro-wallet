import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.tertiary};
  border-radius: 100%;
  overflow: hidden;
`;

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`
