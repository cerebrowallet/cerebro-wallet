import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

interface Props {
  date: Date;
  amount: number;
}

const Wrapper = styled.div`
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

const DayTotals: React.FC<Props> = ({ date, amount }) => {
  return (
    <Wrapper>
      <span>{format(date, 'd MMM')}</span>
      <span>
        {amount < 0 ? '-' : ''}${Math.abs(amount)}
      </span>
    </Wrapper>
  );
};

export default DayTotals;
