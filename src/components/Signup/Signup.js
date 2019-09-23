import React, { Component } from 'react';
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
        .required('Last name is required')
});

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      dataError: {}
    };
  }

  handleOnSumbit = async (values) => {
      const result = await doSignup(values);
      this.setState({
        error: result.error,
        dataError: result
      })

      if (result.error === false) {
        // redigir a login
        this.props.history.push('/')
      }
  }

  render() {
    const { error, dataError } = this.state

    return (
      <div>
        <LogoSimple />
        
        <Formik
          initialValues={ {
            username: '',
            email: '',
            password: '',
            confirmPassword:'',

            first_name:'',
            last_name: ''
          } }

          validationSchema={ SignupSchema }

          onSubmit = { (values) => this.handleOnSumbit(values) }
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
                <label htmlFor="username">Username:</label>
                <Field name="username" type="text" className={ 'form-control' + (errors.username && touched.username ? ' is-invalid' : '') } />
                <ErrorMessage name="username" component="div" className="invalid-feedback" />
                {
                  error && dataError.username
                }
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field name="email" type="text" className={ 'form-control' + (errors.email && touched.email ? ' is-invalid' : '') } />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                {
                  error && dataError.email
                }
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

              <Button type="submit">Submit</Button>
              <button type="button" className="outline" onClick={ handleReset } >
                Reset
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Signup;