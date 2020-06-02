import React from 'react';

import { SkeletonButtonWrapper, SkeletonButton, SkeletonIcon } from './styled';

const IconButtonSkeleton: React.FC = () => {
  return (
    <SkeletonButtonWrapper>
      <SkeletonButton>
        <SkeletonIcon />
      </SkeletonButton>
    </SkeletonButtonWrapper>
  );
};

export default IconButtonSkeleton;
