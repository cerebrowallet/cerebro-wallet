import React, { useEffect } from 'react';
import { useSpring } from 'react-spring';

import {
  BlockStackIcon,
  CerebroIcon,
  DaggersIcon,
  BrainIcon,
  HandshakeIcon,
  KeyIcon,
  LockerIcon,
  RobotIcon,
} from './styled';

const calc = (x: number, y: number): number[] => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

const trans1 = (rotate: number = 0, scale: number = 1) => (
  x: number,
  y: number
) =>
  `translate3d(${x / 50}px,${y / 40}px,0) rotate(${rotate}deg) scale(${scale})`;
const trans2 = (rotate: number = 0, scale: number = 1) => (
  x: number,
  y: number
) =>
  `translate3d(${x / 20}px,${y /
    300}px,0)  rotate(${rotate}deg) scale(${scale})`;
const trans3 = (rotate: number = 0, scale: number = 1) => (
  x: number,
  y: number
) =>
  `translate3d(${x / 45}px,${y /
    55}px,0)  rotate(${rotate}deg) scale(${scale})`;
const trans4 = (rotate: number = 0, scale: number = 1) => (
  x: number,
  y: number
) =>
  `translate3d(${x / 50}px,${y / 50}px,0) rotate(${rotate}deg) scale(${scale})`;

interface Props {
  coords: number[];
}

const FlyingIcons: React.FC<Props> = React.memo(({ coords }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const [x, y] = coords;

  useEffect(() => {
    set({ xy: calc(x, y) });
  }, [coords]);

  return (
    <>
      <BlockStackIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans1(-66, 1)),
          left: '100%',
          top: '-40%',
        }}
      />
      <BlockStackIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans2(-76, 0.8)),
          left: '-65%',
          top: '75%',
        }}
      />
      <BlockStackIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans3(-76, 0.7)),
          left: '65%',
          top: '115%',
        }}
      />
      <CerebroIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans3(-69, 0.5)),
          left: '-5%',
          top: '120%',
        }}
      />
      <CerebroIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans4(-119, 0.6)),
          left: '-43%',
          top: '-3%',
        }}
      />
      <CerebroIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans1(44, 0.7)),
          left: '140%',
          top: '110%',
        }}
      />
      <BrainIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans4(151, 1.15)),
          left: '-38%',
          top: '45%',
        }}
      />
      <BrainIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans3(20, 1)),
          left: '126%',
          top: '41%',
        }}
      />
      <BrainIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans2(151, 0.6)),
          left: '40%',
          top: '-35%',
        }}
      />
      <BrainIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans2(70, 0.85)),
          left: '130%',
          top: '155%',
        }}
      />
      <DaggersIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans3(100, 0.8)),
          left: '150%',
          top: '-2%',
        }}
      />
      <DaggersIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans1(60, 0.9)),
          left: '60%',
          top: '-50%',
        }}
      />
      <DaggersIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans4(10, 0.88)),
          left: '-30%',
          top: '130%',
        }}
      />
      <DaggersIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans1(100, 0.8)),
          left: '-65%',
          top: '-50%',
        }}
      />
      <DaggersIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans1(-180, 0.7)),
          left: '155%',
          top: '150%',
        }}
      />
      <HandshakeIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans3(50, 0.8)),
          left: '146%',
          top: '-55%',
        }}
      />
      <HandshakeIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans4(-40, 1)),
          left: '90%',
          top: '150%',
        }}
      />
      <HandshakeIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans4(-90, 0.9)),
          left: '-55%',
          top: '155%',
        }}
      />
      <KeyIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans3(10, 0.8)),
          left: '-22%',
          top: '-46%',
        }}
      />
      <KeyIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans2(33, 0.8)),
          left: '110%',
          top: '0%',
        }}
      />
      <KeyIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans1(-100, 0.65)),
          left: '20%',
          top: '125%',
        }}
      />
      <LockerIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans1(66, 0.9)),
          left: '55%',
          top: '150%',
        }}
      />
      <LockerIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans4(10, 0.8)),
          left: '-35%',
          top: '90%',
        }}
      />
      <LockerIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans3(80, 0.6)),
          left: '160%',
          top: '85%',
        }}
      />
      <RobotIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans3(80, 0.9)),
          left: '110%',
          top: '110%',
        }}
      />
      <RobotIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans3(-10, 0.8)),
          left: '15%',
          top: '-50%',
        }}
      />
      <RobotIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans3(66, 0.6)),
          left: '-60%',
          top: '20%',
        }}
      />
      <RobotIcon
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans4(-44, 0.55)),
          left: '10%',
          top: '155%',
        }}
      />
    </>
  );
});

export default FlyingIcons;
