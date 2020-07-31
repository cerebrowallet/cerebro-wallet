import styled from 'styled-components';
import { animated } from 'react-spring';

import { colors } from '../../../styles/colors';
import Button from '../../../components/forms/Button/Button';

export const Wrapper = styled(animated.div)`
  padding: 2.8125rem;
  background: ${colors.white};
  border-radius: 1.25rem;
  text-align: center;
`;

export const Img = styled.img`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  margin-bottom: 1.875rem;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin-bottom: 2.1875rem;
  color: ${colors.black};
`;

export const OkButton = styled(Button)`
  background: ${colors.black};
  color: ${colors.white}
`
