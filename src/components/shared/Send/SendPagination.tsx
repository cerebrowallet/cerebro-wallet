import React from 'react';
import styled from 'styled-components';

import { SendSteps } from '../../../enums';
import { Theme } from '../../../utils/styled';

interface Props {
  step: SendSteps;
}

const Wrapper = styled.div`
  text-align: center;
  list-style: none;
  margin: 2.3125rem 0 0 0;
  padding: 0;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 1.875rem;
  }
`;

interface StepProps {
  current: boolean;
  theme: Theme;
}

const Step = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 100%;
  margin: 0 0.125rem;
  background: ${(props: StepProps) =>
    props.current && props.theme ? props.theme.colors.primary : '#eaeaea'};
  cursor: pointer;
  border: 0;
  padding: 0;
  transition: background 0.15s ease-in;
`;

const SendPagination: React.FC<Props> = ({ step }) => {
  return (
    <Wrapper className="progress">
      {Object.values(SendSteps).map(state => (
        <Step key={state} current={state === step} />
      ))}
    </Wrapper>
  );
};

export default SendPagination;
