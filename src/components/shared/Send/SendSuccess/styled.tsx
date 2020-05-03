import styled from 'styled-components';
import { CheckCircle as CheckCircleIcon } from 'react-feather';
import Hash from '../../Hash/Hash';

export const Container = styled.div`
  padding-top: 3.4375rem;
  text-align: center;
`;

export const SuccessIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0 auto 0.9375rem!important;
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

export const HashText = styled(Hash)`
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: underline;
  margin-bottom: 2.25rem;
  justify-content: center;
`;
