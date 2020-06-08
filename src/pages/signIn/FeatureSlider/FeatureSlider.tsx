import React, { useEffect, useState } from 'react';

import Slide from './Slide/Slide';
import {
  Container,
  Slides,
  Title,
  Text,
  Pagination,
  PaginationDot,
} from './styled';

const SLIDES = [
  {
    header: 'What is Blockstack?',
    text: `With Blockstack, you own your login and decentralized storage that uses by Cerebro Wallet. Under the hood, Blockstack uses blockchain to keep everything secure and private.`,
  },
  {
    header: 'Universal signIn for...?',
    text:
      'Discover a universe of new apps, including Cerebro Wallet, where your digital rights are respected. Share, swap, and connect data between apps however you want with Blockstack ID.',
  },
  {
    header: 'What is Cerebro?',
    text:
      'With old internet, big companies own your funds. With Cerebro Wallet, you own your new funds – cryptocurrencies. You are in full control of your accounts and assets.',
  },
  {
    header: 'Is it open source?',
    text:
      'Cerebro Wallet is open source software with public repository. This means that any user can build it and run it on his own. Verify the code and contribute to wallet development.',
  },
];

const FeatureSlider: React.FC = React.memo(() => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlideIndex =
        activeSlideIndex + 1 < SLIDES.length ? activeSlideIndex + 1 : 0;
      setActiveSlideIndex(nextSlideIndex);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [activeSlideIndex]);

  useEffect(() => {
    setActiveSlideIndex(0);
  }, [setActiveSlideIndex]);

  return (
    <Container>
      <Slides>
        {SLIDES.map((slide, i) => (
          <Slide key={i} active={i === activeSlideIndex}>
            <Title>{slide.header}</Title>
            <Text>{slide.text}</Text>
          </Slide>
        ))}
      </Slides>
      <Pagination>
        {SLIDES.map((slide, i) => (
          <PaginationDot
            key={i}
            onClick={() => setActiveSlideIndex(i)}
            active={i === activeSlideIndex}
          />
        ))}
      </Pagination>
    </Container>
  );
});

export default FeatureSlider;
