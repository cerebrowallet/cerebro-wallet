import React from 'react';

import IconButtonSkeleton from '../../../../components/shared/IconButton/IconButtonSkeleton';

const AccountsSkeleton: React.FC = () => {
  return (
    <>
      <IconButtonSkeleton />
      <IconButtonSkeleton />
      <IconButtonSkeleton />
    </>
  );
};

export default AccountsSkeleton;
