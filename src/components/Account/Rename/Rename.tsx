import React from 'react';
import { Formik, Form } from 'formik';
import { AtSign as AtSignIcon } from 'react-feather';

import Page from '../../shared/Page/Page';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import FormGroup from '../../shared/FormGroup/FormGroup';

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
            <section className="white-block">
              <FormGroup label="New account name">
                <Input name="name" required />
              </FormGroup>
              <Button type="submit">Save</Button>
            </section>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default Rename;
