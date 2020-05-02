import { Formik } from 'formik';
import React from 'react';

/**
 *
 * @param children
 * @returns {*}
 */
// eslint-disable-next-line react/prop-types
export default function ({ children }) {
  return (
    <>
      <Formik
        validateOnChange={false}
        initialValues={{
          email: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Enter email address';
          } else if (values.email.indexOf('@') === -1) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
        }}>
        {children}
      </Formik>
    </>
  );
}
