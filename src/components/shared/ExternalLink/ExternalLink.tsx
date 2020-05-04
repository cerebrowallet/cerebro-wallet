import React from 'react';

import { Link } from './styled';

interface Props {
  to: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};

export default ExternalLink;
