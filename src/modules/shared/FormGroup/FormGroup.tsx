import React from 'react';

import './FormGroup.scss';

interface Props {
  label: string;
  children: React.ReactNode;
  className?: string;
};

const FormGroup: React.FC<Props> = ({ label, children, className }) => {
  return (
    <div className={`form-group${className ? ` ${className}` : ''}`}>
      <label htmlFor="" className="form-group__label">
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormGroup;
