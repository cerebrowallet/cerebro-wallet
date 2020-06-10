import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTxComment } from '../../../../store/account/selectors';
import { addTxComment } from '../../../../store/account/actions';

import { Input } from './styled';

interface Props {
  accountId: string;
  txHash: string;
}

const MAX_COMMENT_SIZE = 20;

const TxComment: React.FC<Props> = ({ accountId, txHash }) => {
  const dispatch = useDispatch();
  const txComment = useSelector(getTxComment(accountId, txHash));
  const inputRef = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState(txComment);

  useEffect(() => {
    setDraft(txComment);
  }, [txComment]);

  function saveComment() {
    const comment = draft && draft.trim().slice(0, MAX_COMMENT_SIZE + 1);

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
      onChange={(e) => {
        if (e.target.value.length <= MAX_COMMENT_SIZE) {
          setDraft(e.target.value);
        }
      }}
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
