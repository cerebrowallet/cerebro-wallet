import styled from "styled-components";
import {CheckCircle as CheckCircleIcon} from "react-feather";
import HashText from "../../HashText/HashText";

export const Container = styled.div`
  padding-top: 3.4375rem;
  text-align: center;
`;

export const SuccessIcon = styled(CheckCircleIcon)`
  width: 3rem;
  height: 3rem;
  color: ${props => props.theme.colors.alt3};
  margin-bottom: 0.9375rem;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5625rem;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export const Hash = styled(HashText)`
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: underline;
  margin-bottom: 2.25rem;
  justify-content: center;
`;
