import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import styles from './login.module.css';
import logo from '../../assets/logo-beta.png';
import { Input, Button } from '../commons';

import { doLogin } from '../../persistence/access';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

const Login = () => (
  <div className={styles.login_container}>
    <div className={styles.icon_container}>
      <picture>
        <img src={logo} alt="logo" className={styles.logo} />
      </picture>
    </div>
    <Formik
      enableReinitialize
      initialValues={{
        username: '',
        password: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => 
        {
          let error = false;
          error = await doLogin(values);
          if (error){
            resetForm();
            setErrors({ 'non_field_errors': error });
            setSubmitting(false);
            console.log(error);
          }
        }
      }
    >
      {({ handleSubmit, errors, touched, handleChange, values }) => (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.form_group}>
            {errors.non_field_errors && (
              <formError className={styles.error}>{errors.non_field_errors}</formError>
            )}
            <label className={styles.form_label} htmlFor="text">Username:</label>
            <Input
              type="text"
              name="username"
              placeholder="Enter a username..."
              error={errors.username && touched.username}
              onChange={handleChange}
              value={values.username}
              data-cy="username-field"
            />
            {errors.username && touched.username ? (
              <div className={styles.error}>{errors.username}</div>
            ) : null}
          </div>
          <div className={styles.form_group}>
            <label className={styles.form_label} htmlFor="password">Password:</label>
            <Input
              type="password"
              name="password"
              placeholder="Enter a password..."
              error={errors.password && touched.password}
              onChange={handleChange}
              value={values.password}
              data-cy="password-field"
            />
            {errors.password && touched.password ? (
              <div className={styles.error}>{errors.password}</div>
            ) : null}
          </div>
          <Button data-cy="submit" type="submit">Log in</Button>
        </form>
      )}
    </Formik>
    <div className={styles.signup_container}>
      <p className={styles.signup_text}>Don't have an account yet?</p>
      <Link className={styles.link} to="/signup">
        <Button data-cy="signup-field" type="submit">Sign up</Button>
      </Link>
    </div>
  </div>
);

export default Login;