import React from 'react';

import './LabeledText.scss';
import { Copy as CopyIcon } from 'react-feather';

interface Props {
  label: string;
  children: React.ReactNode;
  canCopyText?: boolean;
};

const LabeledText: React.FC<Props> = ({ label, children, canCopyText }) => {
  return (
    <div
      className={`labeled-text ${
        canCopyText ? 'labeled-text--can-copy-text' : ''
      }`}
    >
      <span className="labeled-text__label">{label}</span>
      <button
        type="button"
        className="labeled-text__text"
        onClick={() => {
          if (canCopyText) {
          }
        }}
      >
        {canCopyText && <CopyIcon className="labeled-text__copy-icon" />}
        {children}
      </button>
    </div>
  );
};

LabeledText.defaultProps = {
  canCopyText: false,
};

export default LabeledText;
