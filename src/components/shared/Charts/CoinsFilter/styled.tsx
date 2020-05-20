import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    line-height: 1.1;

    &:first-child {
      margin-bottom: 0.5rem;
    }
  }
`;
