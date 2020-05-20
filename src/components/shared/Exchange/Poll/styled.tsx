import styled from 'styled-components';
import { Theme } from '../../../../store/layout/types';

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
  background: ${(props: OptionProps) => props?.theme?.colors.secondaryLight};
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
    background: ${(props: OptionProps) =>
      props?.theme?.colors.secondaryExtraLight};
    border-radius: 100%;
    left: 1.25rem;
    top: 0.625rem;
    transition: all 0.15s ease-in;
  }

  &:hover,
  &:active {
    background: ${(props: OptionProps) => props?.theme?.colors.secondary};

    &:before {
      background: ${(props: OptionProps) => props?.theme?.colors.green};
    }
  }

  ${(props: OptionProps) =>
    props.winner &&
    `
    background: ${(props: OptionProps) => props?.theme?.colors.green};
    opacity: 0.2;

    &:before, span {
      background: ${(props: OptionProps) => props?.theme?.colors.green};
      opacity: 1;
    }
  `}
`;

export const ResultPercentage = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 400;
`;
