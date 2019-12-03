import React from 'react';
import { Link } from 'react-router-dom';

import './BlogPost.scss';

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
    <div className="blog-post">
      <h4 className="blog-post__title">{title}</h4>
      {closable && (
        <button
          type="button"
          onClick={() => {}}
          className="blog-post__close-btn"
        >
          <i className="blog-post__close-btn-icon" />
        </button>
      )}
      <p className="blog-post__excerpt">{excerpt}</p>
      {readMoreLink && (
        <Link to={readMoreLink} className="blog-post__read-more">
          Read more &rarr;
        </Link>
      )}
    </div>
  );
};

BlogPost.defaultProps = {
  closable: true,
};

export default BlogPost;
