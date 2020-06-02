import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Activity as ActivityIcon } from 'react-feather';
import { Formik, Form } from 'formik';

import { getCoinsList } from '../../../store/user/selectors';
import { importPublicAddress } from '../../../store/account/actions';
import { Coins } from '../../../dictionaries';

import PageContent from '../../../components/layout/PageContent/PageContent';
import CoinDropDown from '../../../components/forms/DropDown/CoinDropDown';
import FormGroup from '../../../components/forms/FormGroup/FormGroup';
import Input from '../../../components/forms/Input/Input';
import Button from '../../../components/forms/Button/Button';
import WhiteBlock from '../../../components/shared/WhiteBlock';

export interface ImportPublicAddressValues {
  coin: { id: Coins; name: string };
  address: string;
  name: string;
}

const ImportPublicAddress: React.FC = () => {
  const coins = useSelector(getCoinsList);
  const dispatch = useDispatch();

  return (
    <PageContent
      headerText="Import Public Address"
      footerText="Add a public address and see what happens to it. Available features: check balance, charts and transaction history from public explorer."
      FooterIcon={ActivityIcon}
    >
      <Formik
        initialValues={{ coin: coins[0], address: '', name: '' }}
        onSubmit={(values: ImportPublicAddressValues) =>
          dispatch(importPublicAddress(values))
        }
      >
        {({ values }) => (
          <Form>
            <WhiteBlock>
              <FormGroup label="Choose a coin">
                <CoinDropDown name="coin" options={coins} />
              </FormGroup>
              <FormGroup label="Public Address">
                <Input
                  name="address"
                  type="textarea"
                  required
                  placeholder={`Enter ${values.coin.name} address`}
                />
              </FormGroup>
              <FormGroup label="Account name">
                <Input name="name" placeholder="My Bitcoin (optional)" />
              </FormGroup>
              <Button type="submit">Import</Button>
            </WhiteBlock>
          </Form>
        )}
      </Formik>
    </PageContent>
  );
};

export default ImportPublicAddress;
