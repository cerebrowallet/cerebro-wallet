import styled from "styled-components";
import {Theme} from "../../../../utils/styled";

export const Container = styled.section`
  margin-bottom: 1.5625rem;
`;

interface OptionProps {
  theme?: Theme;
  winner?: boolean;
}

export const PollOption = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  border: 0;
  border-radius: 1.25rem;
  background: #f1f1f1;
  padding: 0.375rem 1.25rem 0.375rem 3.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.625rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:focus {
    outline: none;
  }

  &:before {
    position: absolute;
    display: block;
    content: '';
    width: 1rem;
    height: 1rem;
    background: #eaeaea;
    border-radius: 100%;
    left: 1.25rem;
    top: 0.625rem;
    transition: all 0.15s ease-in;
  }

  &:hover,
  &:active {
    background: #eaeaea;

    &:before {
      background: ${(props: OptionProps) =>
  props.theme && props.theme.colors.alt3};
    }
  }

  ${(props: OptionProps) =>
  props.winner &&
  `
    background: #E1F2EB;

    &:before, span {
      background: ${(props: OptionProps) =>
    props.theme && props.theme.colors.alt3};
    }
  `}
`;

export const ResultPercentage = styled.span`
  color: ${props => props.theme.colors.secondary};
  font-weight: 400;
`;
