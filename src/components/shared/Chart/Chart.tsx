import React from 'react';

import './Chart.scss';

interface Props {
  className?: string;
}

const Chart: React.FC<Props> = ({ className }) => {
  return (
    <section className={`chart${className ? ` ${className}` : ''}`} />
  );
};

export default Chart;
