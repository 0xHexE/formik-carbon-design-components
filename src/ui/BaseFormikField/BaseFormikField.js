import PropTypes from 'prop-types';
import React from 'react';
import { useField } from 'formik';
import {
  Checkbox,
  DatePicker,
  Dropdown,
  RadioButtonGroup,
  Search,
} from 'carbon-components-react';

function BaseFormikField({ renderField: RenderField, ...props }) {
  const [field, meta] = useField(props);
  let extraRender = null;

  const finalOverrider = {};

  if (RenderField === Checkbox || RenderField === RadioButtonGroup) {
    finalOverrider.onChange = (e) => {
      field.onChange({
        target: { value: e, id: props.id, name: props.name },
      });
    };
  } else if (RenderField === Search) {
    props.defaultValue = props.defaultValue || props.value || meta.value || '';
    props.value = props.defaultValue;
    props.placeHolderText = props.placeHolderText || props.placeholder;
  } else if (RenderField === Checkbox) {
    finalOverrider.invalidText = null;
    extraRender = <p>{meta.error}</p>;
  } else if (RenderField === DatePicker) {
    finalOverrider.onChange = ([first, second]) => {
      if (props.datePickerType === 'single') {
        field.onChange({
          target: { value: first, id: props.id, name: props.name },
        });
      } else {
        field.onChange({
          target: { value: [first, second], id: props.id, name: props.name },
        });
      }
    };
  }

  const invalid = !!meta.error && meta.touched;

  const requiredInvalidString =
    RenderField === Checkbox ||
    RenderField === Search ||
    RenderField === DatePicker;

  // Here invalid text is not applicable for some components
  if (!requiredInvalidString) {
    finalOverrider.invalidText = meta.error;
  }

  return (
    <>
      <RenderField
        invalid={requiredInvalidString ? invalid.toString() : invalid}
        {...props}
        {...field}
        {...finalOverrider}
      />
      {extraRender}
    </>
  );
}

BaseFormikField.propTypes = {
  datePickerType: PropTypes.any,
  defaultValue: PropTypes.any,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolderText: PropTypes.any,
  placeholder: PropTypes.any,
  renderField: PropTypes.any.isRequired,
  value: PropTypes.any,
};

export default BaseFormikField;
