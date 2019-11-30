import React from 'react';

import './AddAccountIcon.scss';

interface Props {
  icon: React.ReactElement<any>;
}

const AddAccountIcon: React.FC<Props> = ({ icon }) => {
  return (
    <figure className="add-account-icon">
      {React.cloneElement(icon, {
        className: `add-account-icon__icon${
          icon.props.className ? ` ${icon.props.className}` : ''
        }`,
      })}
    </figure>
  );
};

export default AddAccountIcon;
