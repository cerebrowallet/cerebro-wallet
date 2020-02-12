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

interface ElementProps {
  showvalue: boolean;
}

const ValueElement = styled.span`
  display: ${(props: ElementProps) => (props.showvalue ? 'block' : 'none')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: uppercase;

  ${(props: ElementProps) =>
    props.showvalue &&
    `
    flex: 0 1 70%;
  `}
` as any;

const Label = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${(props: ElementProps) =>
    props.showvalue &&
    `
    font-weight: bold;
    padding-left: 1rem;
    flex: 0 1 30%;
    text-align: right;
  `}
` as any;

interface DropDownValueProps {
  name: string;
  id: string | number;
  showValue: boolean;
}

const Value: React.FC<DropDownValueProps> = ({ name, id, showValue }) => {
  return (
    <Wrapper>
      <ValueElement showvalue={showValue}>{id}</ValueElement>
      <Label showvalue={showValue}>{name}</Label>
    </Wrapper>
  );
};

export default Value;
