import styled from "styled-components";

export const DayTotalsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.625rem 0;
  padding: 0.375rem 0.625rem;
  color: ${props => props.theme.colors.secondary}};

  &:nth-of-type(1) {
    margin-top: 0;
  }
`;
