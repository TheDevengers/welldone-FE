import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

import { Button, DatePicker } from '../commons';
//import styles from './signup.module.css';

const UserProfileSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, 'Must be between 4 and 150 characters')
        .max(150, 'Must be between 4 and 150 characters')
        .required('Username is required'),
    email: Yup.string()
        .email('Must be an email')
        .required('Email is required'),

    first_name:Yup.string()
        .min(2, 'Must be between 2 and 30 characters')
        .max(30, 'Must be between 2 and 30 characters'),

    last_name: Yup.string()
        .min(4, 'Must be between 4 and 150 characters')
        .max(150, 'Must be between 4 and 150 characters'),
    birth_date:Yup.string()
        .min(2, 'Must be between 2 and 20 characters')
        .max(30, 'Must be between 2 and 20 characters'),
    birth_place: Yup.string()
        .min(4, 'Must be between 4 and 80 characters')
        .max(150, 'Must be between 4 and 80 characters'),
});

const UserProfileForm = ({ dataUserProfile }) => (
  <Formik
    enableReinitialize={true}
          initialValues={ {
            first_name: dataUserProfile.first_name,
            last_name: dataUserProfile.last_name,
            username: dataUserProfile.username,
            email: dataUserProfile.email,
            description: dataUserProfile.description || '',
            birth_date: dataUserProfile.birth_date || '',
            birth_place: dataUserProfile.birth_place || ''
          } }

          validationSchema={ UserProfileSchema }

          onSubmit = { (values) => this.handleOnSumbit(values) }
        >

    {({ errors, touched, handleReset, values, setFieldValue }) => (
      <Form noValidate>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <Field name="first_name" type="text" value={values.first_name}
          className={ 'form-control' + (errors.first_name && touched.first_name ? ' is-invalid' : '') } />
          <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <Field name="last_name" type="text" value={values.last_name}
          className={ 'form-control' + (errors.last_name && touched.last_name ? ' is-invalid' : '') } />
          <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <Field name="username" type="text" value={values.username}
          className={ 'form-control' + (errors.username && touched.username ? ' is-invalid' : '') } />
          <ErrorMessage name="username" component="div" className="invalid-feedback" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Field name="email" type="text" value={values.email}
          className={ 'form-control' + (errors.email && touched.email ? ' is-invalid' : '') } />
          <ErrorMessage name="email" component="div" className="invalid-feedback" />
        </div>
   
        <div className="form-group">
          <label >Date of Birth</label>
          <DatePicker />
        </div>

        <Button type="submit">Submit</Button>
        <button type="button" className="outline" onClick={ handleReset } >
                Reset
        </button>
      </Form>
          )}
  </Formik>
      
    );

export default UserProfileForm;