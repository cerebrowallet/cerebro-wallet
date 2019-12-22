import React from 'react';
import { Formik, Form } from 'formik';
import { AtSign as AtSignIcon } from 'react-feather';

import Page from '../layout/Page/Page';
import Input from '../forms/Input/Input';
import Button from '../forms/Button/Button';
import FormGroup from '../forms/FormGroup/FormGroup';
import WhiteBlock from '../shared/WhiteBlock';

const Rename: React.FC = () => {
  return (
    <Page
      headerText="Rename"
      footerText="Create a unique name for your account."
      FooterIcon={AtSignIcon}
    >
      <Formik
        initialValues={{
          name: 'My Bitcoin Wallet',
        }}
        onSubmit={() => {}}
      >
        {() => (
          <Form>
            <WhiteBlock>
              <FormGroup label="New account name">
                <Input name="name" required />
              </FormGroup>
              <Button type="submit">Save</Button>
            </WhiteBlock>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default Rename;
