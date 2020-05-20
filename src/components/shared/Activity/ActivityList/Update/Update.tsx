import React from 'react';

import { Container, HideButton, ReadMoreLink } from './styled';

interface Props {
  title: string;
  excerpt: React.ReactElement | string;
  readMoreLink?: string;
  closable?: boolean;
}

const Update: React.FC<Props> = ({
  title,
  excerpt,
  readMoreLink,
  closable,
}) => {
  return (
    <Container>
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
    </Container>
  );
};

Update.defaultProps = {
  closable: true,
};

export default Update;
