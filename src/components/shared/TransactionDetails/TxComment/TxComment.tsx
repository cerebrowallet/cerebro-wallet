import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTxComment } from '../../../../store/account/selectors';
import { addTxComment } from '../../../../store/account/actions';

import { Input } from './styled';

interface Props {
  accountId: string;
  txHash: string;
}

const TxComment: React.FC<Props> = ({ accountId, txHash }) => {
  const dispatch = useDispatch();
  const txComment = useSelector(getTxComment(accountId, txHash));
  const inputRef = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState(txComment);

  useEffect(() => {
    setDraft(txComment);
  }, [txComment]);

  function saveComment() {
    const comment = draft && draft.trim();

    if (comment && comment !== txComment) {
      dispatch(
        addTxComment({
          accountId,
          txHash,
          comment: comment,
        })
      );
    }
  }

  return (
    <Input
      onChange={(e) => setDraft(e.target.value)}
      value={draft}
      ref={inputRef}
      onBlur={saveComment}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          if (inputRef.current) {
            inputRef.current.blur();
          }
        }
      }}
      placeholder="Type something"
    />
  );
};

export default TxComment;
