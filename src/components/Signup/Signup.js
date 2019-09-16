import React from 'react';
import DatePicker from '../commons/Datepicker/DatePicker.js';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

import { Button } from '../commons';
//import styles from './signup.module.css';
import { LogoSimple } from '../commons/Logo/LogoSimple';

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, 'Must be between 4 and 150 characters')
        .max(150, 'Must be between 4 and 150 characters')
        .required('Username is required'),
    email: Yup.string()
        .email('Must be an email')
        .required('Email is required'),
    password: Yup.string()
        .min(4, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword:  Yup.string()
        .oneOf([ Yup.ref('password'), null ], 'Passwords must match')
        .required('Confirm Password is required'),
    datejoined: Yup.date()
        .required(),
    firstname:Yup.string()
        .min(2, 'Must be between 2 and 30 characters')
        .max(30, 'Must be between 2 and 30 characters'),
    lastname: Yup.string()
        .min(4, 'Must be between 4 and 150 characters')
        .max(150, 'Must be between 4 and 150 characters'),
    description: Yup.string()
        .min(1, 'Must be between 1 and 200 characters')
        .max(200, 'Must be between 4 and 200 characters'),
    birthdate: Yup.date(),
    birthplace: Yup.string()
        .min(1, 'Must be between 1 and 100 characters')
        .max(100, 'Must be between 4 and 100 characters')
    
});

const Signup = () => (
  <div>
    <LogoSimple />

    <Formik
      initialValues={ {
        username: '',
        email: '',
        password: '',
        confirmPassword:'',
        datejoined: '',

        firstname:'',
        lastname: '',
        description: '',
        birthdate:'',
        birthplace: ''
      } }

      validationSchema={ SignupSchema }

      onSubmit={ (values) => {
              
        values.datejoined = new Date(JSON.parse(JSON.stringify(new Date())))
        console.log(values)  
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4))
      } }

    >
      {({ errors, touched, isSubmitting, handleReset, values, setFieldValue, dirty }) => (
        <Form noValidate>
          <div className="form-group">
            <label htmlFor="firstname">First Name:</label>
            <Field name="firstname" type="text" className={ 'form-control' + (errors.firstname && touched.firstname ? ' is-invalid' : '') } />
            <ErrorMessage name="firstname" component="div" className="invalid-feedback" />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last Name:</label>
            <Field name="lastname" type="text" className={ 'form-control' + (errors.lastname && touched.lastname ? ' is-invalid' : '') } />
            <ErrorMessage name="lastname" component="div" className="invalid-feedback" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <Field name="description" component="textarea" type="text" className={ 'form-control' + (errors.description && touched.description ? ' is-invalid' : '') } />
            <ErrorMessage name="description" component="div" className="invalid-feedback" />
          </div>

          <div className="form-group">
            <label htmlFor="username">* Username:</label>
            <Field name="username" type="text" className={ 'form-control' + (errors.username && touched.username ? ' is-invalid' : '') } />
            <ErrorMessage name="username" component="div" className="invalid-feedback" />
          </div>

          <div className="form-group">
            <label htmlFor="email">* Email:</label>
            <Field name="email" type="text" className={ 'form-control' + (errors.email && touched.email ? ' is-invalid' : '') } />
            <ErrorMessage name="email" component="div" className="invalid-feedback" />
          </div>

          <div className="form-group">
            <label htmlFor="password">* Password</label>
            <Field name="password" type="password" className={ 'form-control' + (errors.password && touched.password ? ' is-invalid' : '') } />
            <ErrorMessage name="password" component="div" className="invalid-feedback" />
          </div>
            
          <div className="form-group">
            <label htmlFor="confirmPassword">* Confirm Password</label>
            <Field name="confirmPassword" type="password" className={ 'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '') } />
            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
          </div>

          <div className="form-group">
            <label htmlFor="birthplace">Birth Place:</label>
            <Field name="birthplace" type="text" className={ 'form-control' + (errors.birthplace && touched.birthplace ? ' is-invalid' : '') } />
            <ErrorMessage name="birthplace" component="div" className="invalid-feedback" />
          </div>

          <div className="form-group">
            <label htmlFor="birthdate">Birth Date</label>
            <DatePicker name="birthdate" value={ values.birthdate } onChange={ setFieldValue } className={ 'form-control' + (errors.birthdate && touched.birthdate ? ' is-invalid' : '') } />
            <ErrorMessage name="birthdate" component="div" className="invalid-feedback" />
          </div>

          <Button type="submit">Submit</Button>
          <button type="button" className="outline" onClick={ handleReset } disabled={ !dirty || isSubmitting } >
            Reset
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Signup;