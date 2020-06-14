import React, { useEffect, useState } from 'react';

import { Img } from './styled';

interface Props {
  emoji: string | null;
}

const Emoji: React.FC<Props> = ({ emoji }) => {
  const [img, setImg] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (emoji) {
      import(`./emojis/${emoji}.png`).then((image) => setImg(image.default));
    }
  }, [emoji]);

  if (!emoji) {
    return null;
  }

  return <Img src={img} />;
};

export default Emoji;
