import styled from "styled-components";
import LabeledText from "../LabeledText/LabeledText";

export const TopUp = styled.div`
  background: ${props => props.theme.colors.blockBackground};
  border-radius: 1.25rem;
  padding: 1.875rem 1.5625rem;
  margin-bottom: 3.125rem;
`;

export const TopUpHeader = styled.div`
  display: grid;
  grid-template-areas:
    'currency-icon'
    'details';
  margin-bottom: 1.25rem;

  @media (min-width: 420px) {
    grid-template-areas: 'details currency-icon';
    margin-bottom: 0;
  }
`;

export const TopUpHeaderDetails = styled.div`
  grid-area: details;
  margin-bottom: 1.5625rem;

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    margin-bottom: 0.1875rem;
  }

  span {
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: ${props => props.theme.colors.secondary};
  }
`;

export const TopUpHeaderIcon = styled.div`
  text-align: center;
  grid-area: currency-icon;
  margin-bottom: 1.5625rem;

  @media (min-width: 420px) {
    text-align: right;
    margin-bottom: 0;
  }
`;

export const AdditionalInfo = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 60%;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: 75%;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 65%;
  }
`;

export const AdditionalInfoComment = styled(LabeledText)`
  padding-left: 0;
  margin: 0;

  label {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    margin-bottom: 0.125rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`;

export const AdditionalInfoDate = styled(AdditionalInfoComment)`
  margin-bottom: 0.9375rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-bottom: 0;
    margin-right: 1.25rem;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    flex: 1 1 auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    justify-content: space-between;
    max-width: 80%;
  }
`;

export const Placeholder = styled.span`
  display: inline-block;
  width: 100%;
  background: #e7e7e7;
  border-radius: 0.375rem;
  height: 0.5rem;
  vertical-align: middle;
`
