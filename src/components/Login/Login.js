import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import logo from '../../assets/logo-beta.png';
import { Input, Button } from '../commons';
import styles from './login.module.css';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Must be an email').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Login = () => (
  <div className={styles.login_container}>
    <div className={styles.icon_container}>
      <picture>
        <img data-cy="login-image" src={logo} alt="movie" className={styles.logo} />
      </picture>
    </div>
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log('Aqui post al backend', values);
      }}
    >
      {({ handleSubmit, errors, touched, handleChange, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.form_group}>
            <label className={styles.form_label} htmlFor="email">Email:</label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              error={errors.email && touched.email}
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <div className={styles.error}>{errors.email}</div>
            ) : null}
          </div>
          <div className={styles.form_group}>
            <label className={styles.form_label} htmlFor="password">Password:</label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              error={errors.password && touched.password}
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password ? (
              <div className={styles.error}>{errors.password}</div>
            ) : null}
          </div>
          <Button className={styles.prueba}
          type="submit">Submit</Button>
        </form>
      )}
    </Formik>
  </div>
);

export default Login;