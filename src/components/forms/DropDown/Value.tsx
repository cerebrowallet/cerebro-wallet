import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-right: 3.2rem;
  padding-left: 1.25rem;
`;

const ValueElement = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
` as any;

interface DropDownValueProps {
  name: string;
  id: string | number;
}

const Value: React.FC<DropDownValueProps> = ({ name }) => {
  return (
    <Wrapper>
      <ValueElement>{name}</ValueElement>
    </Wrapper>
  );
};

export default Value;
