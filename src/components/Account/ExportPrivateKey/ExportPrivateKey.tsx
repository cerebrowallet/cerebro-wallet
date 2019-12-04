import React from 'react';
import { Download as DownloadIcon } from 'react-feather';
import { Form, Formik } from 'formik';

import Page from '../../shared/Page/Page';
import FormGroup from '../../shared/FormGroup/FormGroup';
import DropDown from '../../shared/DropDown/DropDown';
import Button from '../../shared/Button/Button';

const ExportPrivateKey: React.FC = () => {
  return (
    <Page
      headerText="Export Private Kay"
      footerText="Download txt. file with different formats."
      FooterIcon={DownloadIcon}
    >
      <Formik
        initialValues={{
          format: null,
        }}
        onSubmit={() => {}}
      >
        {() => (
          <Form>
            <section className="white-block">
              <FormGroup label="Private Key format">
                <DropDown
                  name="format"
                  required
                  options={[{ label: 'WIF', value: 'wif' }]}
                />
              </FormGroup>
              <Button type="submit">Next</Button>
            </section>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default ExportPrivateKey;
