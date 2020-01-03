import styled from 'styled-components';
import { animated } from "react-spring";

import blockstack from './icons/blockstack.svg';
import brain from './icons/brain.svg';
import cerebro from './icons/cerebro.svg';
import daggers from './icons/daggers.svg';
import handshake from './icons/handshake.svg';
import key from './icons/key.svg';
import locker from './icons/locker.svg';
import robot from './icons/robot.svg';

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IconProps {
  left: number;
  top: number;
}

const Icon = styled(animated.div)`
  position: absolute;
  left: ${(props: IconProps) => props.left}%;
  top:  ${(props: IconProps) => props.top}%;
  will-change: transform;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 4rem;
  height: 4rem;
`;

export const BlockStackIcon = styled(Icon)`
  background-image: url(${blockstack});
`;

export const BrainIcon = styled(Icon)`
  background-image: url(${brain});
`;

export const CerebroIcon = styled(Icon)`
  background-image: url(${cerebro});
`;

export const DaggersIcon = styled(Icon)`
  background-image: url(${daggers});
`;

export const HandshakeIcon = styled(Icon)`
  background-image: url(${handshake});
`;

export const KeyIcon = styled(Icon)`
  background-image: url(${key});
`;

export const LockerIcon = styled(Icon)`
  background-image: url(${locker});
`;

export const RobotIcon = styled(Icon)`
  background-image: url(${robot});
`;
