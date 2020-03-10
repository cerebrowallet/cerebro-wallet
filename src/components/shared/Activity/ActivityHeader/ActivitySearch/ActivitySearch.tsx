import React from 'react';
import { Search as SearchIcon } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

import { Wrapper, Input } from './styled';
import { searchActivityByHash } from '../../../../../store/account/actions';
import { getSearchByHashStr } from '../../../../../store/account/selectors';

const ActivityHeader: React.FC = () => {
  const dispatch = useDispatch();
  const searchStr = useSelector(getSearchByHashStr);

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Search by hash..."
        value={searchStr}
        onChange={e => dispatch(searchActivityByHash(e.target.value))}
      />
      <SearchIcon />
    </Wrapper>
  );
};

export default ActivityHeader;
