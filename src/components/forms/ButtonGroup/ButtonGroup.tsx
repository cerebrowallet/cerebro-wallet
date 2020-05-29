import React from 'react';
import { useFormikContext } from 'formik';

import { Container, Button } from './styled';

interface Props {
  name: string;
  options: { id: any; name: string }[];
}

const ButtonGroup: React.FC<Props> = ({ name, options }) => {
  const { values, setFieldValue } = useFormikContext<any>();

  return (
    <Container>
      {options.map((option, i) => (
        <Button
          key={`${option.id}-${i}`}
          type="button"
          onClick={() => setFieldValue(name, option.id)}
          active={values[name] === option.id}
        >
          {option.name}
        </Button>
      ))}
    </Container>
  );
};

export default ButtonGroup;
