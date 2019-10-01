import React, { Fragment } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './editItemForm.module.css';

import { Input, Button } from '../commons';
// import Nav from '../commons/Nav/Nav.js';

import { editItem } from '../../persistence/edit';

const EditItemSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  introduction: Yup.string().required('Introduction is required'),
  state: Yup.string().required('State is required'),
  body: Yup.string().required('Body is required'),
  categories: Yup.string().required('Category is required!'),
});

const EditItemForm = ({ dataArticle, dataCategories }) => (
  <Formik
    enableReinitialize={true}
    initialValues={{
      title: dataArticle.title,
      introduction: dataArticle.introduction,
      state: dataArticle.state,
      body: dataArticle.body,
      categories: []
    }}
    validationSchema={EditItemSchema}
    onSubmit={(values) => {
      console.log(JSON.stringify(values));
      const queryParam = dataArticle.id;
      editItem(queryParam, values);
    }}
  >
    {({ handleSubmit, errors, touched, handleChange, handleBlur, values }) => (
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
          <select
            name="state"
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ display: 'block' }}
          >
            <option value="PB" label="PB" />
            <option value="DR" label="DR" />
          </select>
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
        <div className={styles.form_group}>
          <label className={styles.form_label}>categories:</label>
          <select
            name="categories"
            value={values.categories}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ display: 'block' }}
          >
            {dataCategories.map((data) => {
              const id = data.id;
              return <option key={data.id} value={id} label={data.name} />;
            })}
          </select>
          {errors.categories && touched.categories ? (
            <div className={styles.error}>{errors.categories}</div>
          ) : null}
        </div>
        <Button className={styles.submit} type="submit">Submit</Button>
      </form>
    )}
  </Formik>
);

export default EditItemForm;