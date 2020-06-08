import React, { useEffect, useState } from 'react';

import { Wrapper, Circle } from './styled';
import { useSpring } from 'react-spring';

const calc = (x: number, y: number): number[] => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

const trans1 = (scale: number = 1) => (
  x: number,
  y: number
) =>
  `translate3d(${x / 50}px,${y / 40}px,0) scale(${scale})`;
const trans2 = (scale: number = 1) => (
  x: number,
  y: number
) =>
  `translate3d(${x / 20}px,${
    y / 300
  }px,0) scale(${scale})`;
const trans3 = (scale: number = 1) => (
  x: number,
  y: number
) =>
  `translate3d(${x / 45}px,${
    y / 55
  }px,0) scale(${scale})`;
const trans4 = (scale: number = 1) => (
  x: number,
  y: number
) =>
  `translate3d(${x / 50}px,${y / 50}px,0) scale(${scale})`;

interface Props {
  children: React.ReactNode;
}

const Background: React.FC<Props> = ({ children }) => {
  const [coords, setCoords] = useState([0, 0]);
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const [x, y] = coords;

  useEffect(() => {
    set({ xy: calc(x, y) });
  }, [coords, x, y, set]);

  return (
    <Wrapper onMouseMove={({ clientX: x, clientY: y }) => setCoords([x, y])}>
      <Circle
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans1(2.7)),
          left: '80%',
          top: '10%',
        }}
      />
      <Circle
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans2(1)),
          left: '90%',
          top: '30%',
        }}
      />
      <Circle
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans3(1.9)),
          left: '20%',
          top: '0%',
        }}
      />
      <Circle
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans4(0.9)),
          left: '10%',
          top: '50%',
        }}
      />
      <Circle
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans1(2)),
          left: '20%',
          top: '65%',
        }}
      />
      <Circle
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans1(2.8)),
          left: '45%',
          top: '100%',
        }}
      />
      <Circle
        style={{
          // @ts-ignore
          transform: props.xy.interpolate(trans1(1.3)),
          left: '80%',
          top: '70%',
        }}
      />
      {children}
    </Wrapper>
  );
};

export default Background;
