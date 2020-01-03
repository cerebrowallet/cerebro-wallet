import React, { useEffect, useState } from 'react';

import Slide from './Slide/Slide';
import { Wrapper, SlideHeader, SlideContent } from './styled';

interface Props {
  slides: {
    header: string;
    text: string;
  }[];
}

const FeatureSlider: React.FC<Props> = ({ slides }) => {
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

  return (
    <Wrapper>
      {slides.map((slide, i) => (
        <Slide key={i} active={i === activeSlideIndex}>
          <SlideHeader>{slide.header}</SlideHeader>
          <SlideContent>{slide.text}</SlideContent>
        </Slide>
      ))}
    </Wrapper>
  );
};

export default FeatureSlider;
