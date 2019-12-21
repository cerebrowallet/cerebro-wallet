import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  grid-area: chart;
  background: ${props => props.theme.colors.blockBackground};
  border-radius: 1.25rem;
  height: 26.875rem;
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

interface Props {
  className?: string;
}

const Chart: React.FC<Props> = ({ className }) => {
  return <Wrapper className={className} />;
};

export default Chart;
