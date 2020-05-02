import React from 'react';
import { getConfig } from '../../../scripts/storybook/storyConfig';
import BaseFormikField from './BaseFormikField';
import FormikForm from '../../utils/formik-form';
import { Form } from 'formik';
import {
  Checkbox,
  TextArea,
  TextInput,
  Search,
  DatePicker,
  RadioButtonGroup,
  RadioButton,
  DatePickerInput,
  Dropdown,
} from 'carbon-components-react';

export default getConfig({
  title: 'BaseFormikField',
  component: BaseFormikField,
});

export function Basic() {
  return (
    <FormikForm>
      {(props) => {
        return (
          <Form>
            <BaseFormikField
              name="email"
              id="email"
              labelText="Email"
              placeholder="Email"
              renderField={TextInput}
            />
            <BaseFormikField
              name="Information"
              id="information"
              labelText="Information"
              placeholder="Email"
              renderField={TextArea}
            />
            <BaseFormikField
              renderField={Checkbox}
              labelText="Checked"
              id="ch1"
              name="checkbox"
            />
            <BaseFormikField
              renderField={RadioButtonGroup}
              labelText="Checked"
              value={'search'}
              id="ch1"
              name="r1">
              <RadioButton labelText="Radio" value="radio-1" id="radio-1" />
            </BaseFormikField>
            <BaseFormikField
              renderField={Search}
              labelText="Checked"
              value={''}
              placeholder={'Search'}
              id="ch112"
              name="search"
            />
            <BaseFormikField
              id="data-picker"
              datePickerType="single"
              dateFormat="m/d/Y"
              renderField={DatePicker}
              name="date-picker">
              <DatePickerInput id="test" labelText="Date" />
            </BaseFormikField>
            <BaseFormikField
              id="data-picker"
              datePickerType="range"
              dateFormat="m/d/Y"
              renderField={DatePicker}
              name="date-picker2">
              <DatePickerInput id="test-dpi1" labelText="Date" />
              <DatePickerInput id="test-dpi2" labelText="Date" />
            </BaseFormikField>
            <BaseFormikField
              id={'drop-down'}
              name={'drop-down'}
              renderField={Dropdown}
              items={[{ text: 'Test1', value: 'test1' }]}
              itemToString={item => (item ? item.text : '')}
            />
            {/* eslint-disable-next-line react/prop-types */}
            {JSON.stringify(props.values, null, 2)}
          </Form>
        );
      }}
    </FormikForm>
  );
}
