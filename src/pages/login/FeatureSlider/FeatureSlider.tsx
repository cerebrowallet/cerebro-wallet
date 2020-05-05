import React, { useEffect, useState } from 'react';

import Slide from './Slide/Slide';
import { SliderWrapper, SlideHeader, SlideContent } from './styled';
import Background from './Background/Background';
import FlyingIcons from './FlyingIcons/FlyingIcons';

interface Props {
  slides: {
    header: string;
    text: string;
  }[];
}

const FeatureSlider: React.FC<Props> = React.memo(({ slides }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlideIndex =
        activeSlideIndex + 1 < slides.length ? activeSlideIndex + 1 : 0;
      setActiveSlideIndex(nextSlideIndex);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [activeSlideIndex, slides]);

  useEffect(() => {
    setActiveSlideIndex(0);
  }, [slides]);

  return (
    <Background>
      {({ coords }) => (
        <SliderWrapper>
          {slides.map((slide, i) => (
            <Slide key={i} active={i === activeSlideIndex}>
              <SlideHeader>{slide.header}</SlideHeader>
              <SlideContent>{slide.text}</SlideContent>
            </Slide>
          ))}
          <FlyingIcons coords={coords} />
        </SliderWrapper>
      )}
    </Background>
  );
});

export default FeatureSlider;
