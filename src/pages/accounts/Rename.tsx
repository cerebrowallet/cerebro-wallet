import React from 'react';
import { Formik, Form } from 'formik';
import { AtSign as AtSignIcon } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

import { updateAccount } from '../../store/account/actions';
import { getAccountById } from '../../store/account/selectors';

import PageContent from '../../components/layout/PageContent/PageContent';
import Input from '../../components/forms/Input/Input';
import Button from '../../components/forms/Button/Button';
import FormGroup from '../../components/forms/FormGroup/FormGroup';
import WhiteBlock from '../../components/shared/WhiteBlock';
import Loader from '../../components/shared/Loader/Loader';

interface Props {
  accountId: string;
}

export const validateAccountName = (required: boolean) => (value: string) => {
  if (required && !value.trim()) {
    return 'Field is required';
  }

  if (value.trim().length > 20) {
    return 'Max allowed length is 20 characters';
  }

  return;
}

const Rename: React.FC<Props> = ({ accountId }) => {
  const account = useSelector(getAccountById(accountId));
  const dispatch = useDispatch();

  if (!account) {
    return <Loader />;
  }

  return (
    <PageContent
      headerText="Rename"
      footerText="Create a unique name for your account."
      FooterIcon={AtSignIcon}
    >
      <Formik
        initialValues={{
          name: account.name,
        }}
        enableReinitialize
        onSubmit={(values: { name: string }) => {
          if (values.name !== account.name) {
            dispatch(
              updateAccount({
                accountId,
                update: {
                  name: values.name,
                },
              })
            );
          }
        }}
      >
        <Form>
          <WhiteBlock>
            <FormGroup label="New account name">
              <Input
                name="name"
                required
                validate={validateAccountName(true)}
              />
            </FormGroup>
            <Button type="submit">Save</Button>
          </WhiteBlock>
        </Form>
      </Formik>
    </PageContent>
  );
};

export default Rename;
