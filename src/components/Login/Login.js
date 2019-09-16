import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './login.module.css';
import logo from '../../assets/logo-beta.png';
import { Input, Button } from '../commons';

import { doLogin } from '../../persistence/access';

const SignupSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

const Login = () => (
  <div className={styles.login_container}>
    <div className={styles.icon_container}>
      <picture>
        <img src={logo} alt="movie" className={styles.logo} />
      </picture>
    </div>
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => doLogin(values)}
    >
      {({ handleSubmit, errors, touched, handleChange, values }) => (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.form_group}>
            <label className={styles.form_label} htmlFor="text">Username:</label>
            <Input
              type="text"
              name="username"
              placeholder="Enter a username..."
              error={errors.username && touched.username}
              onChange={handleChange}
              value={values.username}
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
            />
            {errors.password && touched.password ? (
              <div className={styles.error}>{errors.password}</div>
            ) : null}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      )}
    </Formik>
  </div>
);

export default Login;