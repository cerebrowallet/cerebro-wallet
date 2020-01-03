import React from 'react';

import {
  Wrapper,
  BlockStackIcon,
  CerebroIcon,
  DaggersIcon,
  BrainIcon,
  HandshakeIcon,
  KeyIcon,
  LockerIcon,
  RobotIcon,
} from './styled';
import { useSpring } from 'react-spring';

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

const trans1 = (rotate: number = 0, scale: number = 1) => (
  x: number,
  y: number
) =>
  `translate3d(${x / 10}px,${y /
    10}px,0) rotate(${rotate}deg) scale(${scale})`;
const trans2 = (rotate: number = 0, scale: number = 1) => (x: number, y: number) =>
  `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)  rotate(${rotate}deg) scale(${scale})`;
const trans3 = (rotate: number = 0, scale: number = 1) => (x: number, y: number) =>
  `translate3d(${x / 6 - 20}px,${y / 6 - 30}px,0)  rotate(${rotate}deg) scale(${scale})`;
const trans4 = (rotate: number = 0, scale: number = 1) => (x: number, y: number) =>
  `translate3d(${x / 3.5}px,${y / 3.5}px,0) rotate(${rotate}deg) scale(${scale})`;

interface Props {
  children: React.ReactNode;
}

const Background: React.FC<Props> = ({ children }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <Wrapper
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <BlockStackIcon
        left={10}
        top={10}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans1(-66, 1)) }}
      />
      <BlockStackIcon
        left={90}
        top={90}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans2(-76, 0.8)) }}
      />
      <CerebroIcon
        left={5}
        top={100}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans3(-69, 0.5)) }}
      />
      <CerebroIcon
        left={23}
        top={14}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans4(-119, 0.6)) }}
      />
      <BrainIcon
        left={7}
        top={85}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans2(151, 1.15)) }}
      />
      <BrainIcon
        left={86}
        top={41}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans1(20, 1)) }}
      />
      <BrainIcon
        left={50}
        top={30}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans2(151, 0.6)) }}
      />
      <BrainIcon
        left={40}
        top={110}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans2(70, 0.85)) }}
      />
      <DaggersIcon
        left={40}
        top={13}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans3(100, 0.8)) }}
      />
      <DaggersIcon
        left={60}
        top={100}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans1(60, 0.9)) }}
      />
      <DaggersIcon
        left={80}
        top={20}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans4(10, 0.88)) }}
      />
      <DaggersIcon
        left={5}
        top={80}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans1(100, 0.8)) }}
      />
      <HandshakeIcon
        left={65}
        top={20}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans3(50, 0.8)) }}
      />
      <HandshakeIcon
        left={25}
        top={80}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans4(-40, 1)) }}
      />
      <KeyIcon
        left={75}
        top={80}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans3(10, 0.8)) }}
      />
      <KeyIcon
        left={10}
        top={30}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans1(-100, 0.6)) }}
      />
      <LockerIcon
        left={95}
        top={5}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans1(66, 0.9)) }}
      />
      <LockerIcon
        left={60}
        top={80}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans4(10, 0.7)) }}
      />
      <LockerIcon
        left={20}
        top={5}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans3(80, 0.6)) }}
      />
      <RobotIcon
        left={90}
        top={90}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans3(80, 0.9)) }}
      />
      <RobotIcon
        left={7}
        top={45}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans3(-10, 0.6)) }}
      />
      <RobotIcon
        left={70}
        top={10}
        // @ts-ignore
        style={{ transform: props.xy.interpolate(trans4(-44, 0.55)) }}
      />
      {children}
    </Wrapper>
  );
};

export default Background;
