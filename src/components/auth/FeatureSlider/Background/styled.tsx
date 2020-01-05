import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
