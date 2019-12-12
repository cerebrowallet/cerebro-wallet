import React from 'react';

import './LabeledText.scss';
import { Copy as CopyIcon } from 'react-feather';

interface Props {
  label: string;
  children: React.ReactNode;
  canCopyText?: boolean;
  className?: string;
  icon?: React.ReactElement<any>;
}

const LabeledText: React.FC<Props> = ({
  label,
  children,
  canCopyText,
  className,
  icon,
}) => {
  return (
    <div
      className={`labeled-text${
        canCopyText ? ' labeled-text--can-copy-text' : ''
      }${className ? ` ${className}` : ''}`}
    >
      <span className="labeled-text__label">{label}</span>
      {canCopyText ? (
        <button type="button" className="labeled-text__text" onClick={() => {}}>
          <CopyIcon className="labeled-text__copy-icon" />
          {children}
        </button>
      ) : (
        <span className="labeled-text__text">
          {icon &&
            React.cloneElement(icon, { className: 'labeled-text__copy-icon' })}
          {children}
        </span>
      )}
    </div>
  );
};

LabeledText.defaultProps = {
  canCopyText: false,
};

export default LabeledText;
