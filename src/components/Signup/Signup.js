import React from 'react';
import DatePicker from '../commons/Datepicker/DatePicker.js';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

import { Button } from '../commons';
//import styles from './signup.module.css';
import { doSignup } from '../../utils/apiSignup';
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
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword:  Yup.string()
        .oneOf([ Yup.ref('password'), null ], 'Passwords must match')
        .required('Confirm Password is required'),

    first_name:Yup.string()
        .min(2, 'Must be between 2 and 30 characters')
        .max(30, 'Must be between 2 and 30 characters')
        .required('First name is required'),
    last_name: Yup.string()
        .min(4, 'Must be between 4 and 150 characters')
        .max(150, 'Must be between 4 and 150 characters')
        .required('Last name is required'),
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

        first_name:'',
        last_name: '',
        description: '',
        birthdate:'',
        birthplace: ''
      } }

      validationSchema={ SignupSchema }

      onSubmit={ async (values) => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4))
        const result = await doSignup(values)
        console.log('onSubmit realizado')
        console.log(result.status)
        if (result.status === 201){  
          console.log('signup HECHO')
        } 
        else if ( JSON.stringify(result.status) === 400){
          console.log('signup FALLIDO')
        }       
        else{
          console.log('no hace validacion')
        }
      } }

    >
      {({ errors, touched, handleReset, values, setFieldValue }) => (
        <Form noValidate>
          <div className="form-group">
            <label htmlFor="first_name">First Name:</label>
            <Field name="first_name" type="text" className={ 'form-control' + (errors.first_name && touched.first_name ? ' is-invalid' : '') } />
            <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name:</label>
            <Field name="last_name" type="text" className={ 'form-control' + (errors.last_name && touched.last_name ? ' is-invalid' : '') } />
            <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
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
          <button type="button" className="outline" onClick={ handleReset } >
            Reset
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Signup;