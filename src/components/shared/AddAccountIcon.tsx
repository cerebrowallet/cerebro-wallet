import React from 'react';
import styled from 'styled-components';

interface Props {
  Icon: React.ComponentType<any>;
}

const Figure = styled.figure`
  position: relative;
  width: 2.25rem;
  height: 2.25rem;
  background: ${props => props.theme.colors.tertiary};
  margin-right: 0.9375rem;
  border-radius: 100%;
  
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.theme.colors.alt1};
    width: 0.75rem;
    height: 0.75rem;
  }
`;

const AddAccountIcon: React.FC<Props> = ({ Icon }) => {
  return (
    <Figure>
      <Icon />
    </Figure>
  );
};

export default AddAccountIcon;
