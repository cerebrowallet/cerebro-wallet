import React from 'react';

import { Section } from './styled';

interface Props {
  className?: string;
}

const Chart: React.FC<Props> = ({ className }) => {
  return <Section className={className} />;
};

export default Chart;
