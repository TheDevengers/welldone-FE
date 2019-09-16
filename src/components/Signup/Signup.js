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
    datejoined: Yup.date().default(function() {
            return new Date();
    }), 
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
        console.log(values)
        values.datejoined = () => new Date()
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4))
      } }

    >
      {({ handleSubmit, errors, touched, handleChange, values, setFieldValue }) => (
        <Form>
          
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <Field name="username" type="text" className={ 'form-control' + (errors.username && touched.username ? ' is-invalid' : '') } />
            <ErrorMessage name="username" component="div" className="invalid-feedback" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field name="email" type="text" className={ 'form-control' + (errors.email && touched.email ? ' is-invalid' : '') } />
            <ErrorMessage name="email" component="div" className="invalid-feedback" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className={ 'form-control' + (errors.password && touched.password ? ' is-invalid' : '') } />
            <ErrorMessage name="password" component="div" className="invalid-feedback" />
          </div>
            
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword" type="password" className={ 'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '') } />
            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
          </div>

          <div className="form-group">
            <label htmlFor="birthdate">Birth Date</label>
            <DatePicker name="birthdate" value={ values.birthdate } onChange={ setFieldValue } className={ 'form-control' + (errors.birthdate && touched.birthdate ? ' is-invalid' : '') } />
            <ErrorMessage name="birthdate" component="div" className="invalid-feedback" />
          </div>

          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Signup;