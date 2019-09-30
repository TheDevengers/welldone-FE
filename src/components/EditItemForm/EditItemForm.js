import React, { Fragment } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './editItemForm.module.css';

import { Input, Button } from '../commons';
import Nav from '../commons/Nav/Nav.js';

import api from '../../utils/api';

const { editArticle } = api();

const EditItemSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  introduction: Yup.string().required('Introduction is required'),
  state: Yup.string().required('State is required'),
  body: Yup.string().required('Body is required')
});

const EditItemForm = () => (
  <Fragment>

    <Nav />
    <Formik
      initialValues={{
        title: '',
        introduction: '',
        state: '',
        body: ''
      }}
      validationSchema={EditItemSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit, errors, touched, handleChange, values }) => (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.form_group}>
            <label className={styles.form_label} htmlFor="text">Title:</label>
            <Input
              className={styles.input}
              type="text"
              name="title"
              placeholder="Enter a title..."
              error={errors.title && touched.title}
              onChange={handleChange}
              value={values.title}
            />
            {errors.title && touched.title ? (
              <div className={styles.error}>{errors.title}</div>
            ) : null}
          </div>
          <div className={styles.form_group}>
            <label className={styles.form_label} htmlFor="password">Introduction:</label>
            <Input
              className={styles.input}
              type="text"
              name="introduction"
              placeholder="Enter a introduction of article..."
              error={errors.introduction && touched.introduction}
              onChange={handleChange}
              value={values.introduction}
            />
            {errors.introduction && touched.introduction ? (
              <div className={styles.error}>{errors.introduction}</div>
            ) : null}
          </div>
          <div className={styles.form_group}>
            <label className={styles.form_label} htmlFor="text">State:</label>
            <Input
              className={styles.input}
              type="text"
              name="state"
              placeholder="Enter a state..."
              error={errors.state && touched.state}
              onChange={handleChange}
              value={values.state}
            />
            {errors.state && touched.state ? (
              <div className={styles.error}>{errors.state}</div>
            ) : null}
          </div>
          <div className={styles.form_group}>
            <label className={styles.form_label} htmlFor="text">Content:</label>
            <Input
              className={styles.input}
              type="text"
              name="body"
              placeholder="Enter a content of article..."
              error={errors.body && touched.body}
              onChange={handleChange}
              value={values.body}
            />
            {errors.body && touched.body ? (
              <div className={styles.error}>{errors.body}</div>
            ) : null}
          </div>
          <Button className={styles.submit} type="submit">Submit</Button>
        </form>
      )}
    </Formik>
  </Fragment>
);

export default EditItemForm;