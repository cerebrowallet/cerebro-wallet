import React from 'react';

import { BlogPostContainer, HideButton, ReadMoreLink } from './styled';

interface Props {
  title: string;
  excerpt: React.ReactElement | string;
  readMoreLink?: string;
  closable?: boolean;
}

const BlogPost: React.FC<Props> = ({
  title,
  excerpt,
  readMoreLink,
  closable,
}) => {
  return (
    <BlogPostContainer>
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
    </BlogPostContainer>
  );
};

BlogPost.defaultProps = {
  closable: true,
};

export default BlogPost;
