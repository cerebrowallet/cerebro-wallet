import React from 'react';

import { Container, ContainerLight, HideButton, ReadMoreLink } from './styled';

interface Props {
  title: string;
  excerpt: React.ReactElement | string;
  readMoreLink?: string;
  closable?: boolean;
  lightBg?: boolean;
}

const Update: React.FC<Props> = ({
  title,
  excerpt,
  readMoreLink,
  closable,
  lightBg,
}) => {
  const ContainerElement = lightBg ? ContainerLight : Container;

  return (
    <ContainerElement>
      <h4>{title}</h4>
      {closable && (
        <HideButton type="button" onClick={() => {}}>
          <i />
        </HideButton>
      )}
      <p>{excerpt}</p>
      {readMoreLink && (
        <ReadMoreLink to={readMoreLink}>Read more &rarr;</ReadMoreLink>
      )}
    </ContainerElement>
  );
};

Update.defaultProps = {
  closable: true,
};

export default Update;
