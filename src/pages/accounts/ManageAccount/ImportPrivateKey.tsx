import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Shield as ShieldIcon } from 'react-feather';
import { Form, Formik } from 'formik';

import { getCoinsList } from '../../../store/user/selectors';
import { Coins } from '../../../dictionaries';
import { KeyTypes, AddressTypes } from '../../../store/account/types';
import { importPrivateKey } from '../../../store/account/actions';
import { validateAccountName } from '../Rename';

import PageContent from '../../../components/layout/PageContent/PageContent';
import CoinDropDown from '../../../components/forms/DropDown/CoinDropDown';
import DropDown from '../../../components/forms/DropDown/DropDown';
import FormGroup from '../../../components/forms/FormGroup/FormGroup';
import Input from '../../../components/forms/Input/Input';
import Button from '../../../components/forms/Button/Button';
import WhiteBlock from '../../../components/shared/WhiteBlock';
import ButtonGroup from '../../../components/forms/ButtonGroup/ButtonGroup';

export interface ImportPrivateKeyFormValues {
  coin: { id: Coins; name: string };
  keyType: { id: KeyTypes; name: string };
  key: string;
  accountName: string;
  addressType: AddressTypes;
  derivationPath: string;
}

const keyTypeOptions = [
  {
    id: KeyTypes.Mnemonic,
    name: 'Mnemonic Phrase',
  },
  {
    id: KeyTypes.PrivateKey,
    name: 'Private Key',
  },
  {
    id: KeyTypes.WIF,
    name: 'WIF',
  },
];

const ImportPrivateKey: React.FC = () => {
  const coins = useSelector(getCoinsList);
  const dispatch = useDispatch();

  return (
    <PageContent
      headerText="Import Private Key"
      footerText="All your keys securely stored via Decentralized Storage Gaia by Blockstack. Keys cannot be used to store or transfer your funds by anyone except you. Available features: check balance, charts, activity, send, receive and in-app exchange service."
      FooterIcon={ShieldIcon}
    >
      <Formik
        initialValues={{
          coin: coins[0],
          keyType: keyTypeOptions[0],
          key: '',
          accountName: '',
          addressType: AddressTypes.SegWit,
          derivationPath: '',
        }}
        onSubmit={(values: ImportPrivateKeyFormValues) =>
          dispatch(
            importPrivateKey({
              ...values,
              accountName:
                values.accountName || `My ${values.coin.name} Wallet`,
            })
          )
        }
      >
        {({ values, setFieldValue, setFieldTouched }) => (
          <Form>
            <WhiteBlock>
              <FormGroup label="Choose a coin">
                <CoinDropDown name="coin" options={coins} />
              </FormGroup>
              <FormGroup label="Type">
                <DropDown
                  name="keyType"
                  options={keyTypeOptions}
                  onChange={() => {
                    setFieldValue('key', '');
                    setFieldTouched('key', false);
                  }}
                />
              </FormGroup>
              <FormGroup
                label={`Your ${
                  values.keyType.id === KeyTypes.WIF
                    ? values.keyType.name
                    : values.keyType.name.toLowerCase()
                }`}
              >
                <Input
                  name="key"
                  type="textarea"
                  required
                  rows={3}
                  placeholder={`Write here your ${values.keyType.name}`}
                />
              </FormGroup>
              <FormGroup label="Address format">
                <ButtonGroup
                  name="addressType"
                  options={[
                    { name: 'Default', id: AddressTypes.SegWit },
                    { name: 'Legacy', id: AddressTypes.P2PKH },
                  ]}
                />
              </FormGroup>
              {values.keyType.id === KeyTypes.Mnemonic && (
                <FormGroup label="Derivation Path">
                  <Input
                    name="derivationPath"
                    placeholder="m/84'/0'/0'/0/0 (optional)"
                  />
                </FormGroup>
              )}
              <FormGroup label="Account name">
                <Input
                  name="accountName"
                  placeholder={`${values.coin.name} (optional)`}
                  validate={validateAccountName(false)}
                />
              </FormGroup>
              <Button type="submit">Import</Button>
            </WhiteBlock>
          </Form>
        )}
      </Formik>
    </PageContent>
  );
};

export default ImportPrivateKey;
