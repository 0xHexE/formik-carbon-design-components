/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import BaseFormikField from './BaseFormikField';
import FormikForm from '../../utils/formik-form';
import { Form } from 'formik';
import { mount } from 'enzyme';
import { TextInput } from 'carbon-components-react';

function generateElement() {
  return (
    <FormikForm>
      {() => {
        return (
          <Form>
            <BaseFormikField
              name="email"
              id="email"
              labelText="Email"
              placeholder="Email"
              renderField={TextInput}
            />
          </Form>
        );
      }}
    </FormikForm>
  );
}

describe('TextArea', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(generateElement(), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('render email in it', () => {
    const { getByText } = render(generateElement());
    getByText('Email');
  });

  test('match with snapshot', () => {
    const wrapper = mount(generateElement());
    expect(wrapper.html()).toMatchSnapshot();
  });
});
