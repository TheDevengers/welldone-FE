import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './editItemForm.module.css';

import { Input, Button } from '../commons';

import { editItem } from '../../persistence/edit';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const EditItemSchema = Yup.object().shape({
  title: Yup.string().required('Title is required').min(4, 'Title must be between 4 and 150 characters')
    .max(150, 'Title must be between 4 and 150 characters'),
  introduction: Yup.string().required('Introduction is required').min(4, 'Title must be between 4 and 150 characters')
    .max(250, 'Title must be between 4 and 150 characters'),
  state: Yup.string().required('State is required'),
  image: Yup.string().required('State is required'),
  body: Yup.string().required('Body is required').min(4, 'Title must be between 4 and 150 characters')
    .max(2000, 'Title must be between 4 and 150 characters'),
  categories: Yup.array(),
});

const EditItemForm = ({ dataArticle, dataCategories, defaultCategories, currentCategoryValue }) => (
  <Formik
    enableReinitialize={true}
    initialValues={{
      title: dataArticle.title,
      introduction: dataArticle.introduction,
      image: dataArticle.image,
      state: dataArticle.state,
      body: dataArticle.body,
      categories: defaultCategories.map((elem) => { return { id: elem.id }; })
    }}
    validationSchema={EditItemSchema}
    onSubmit={(values) => {
      const queryParam = dataArticle.id;
      editItem(queryParam, values);
    }}
  >
    {({ handleSubmit, errors, touched, handleChange, handleBlur, values }) => (
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h1 className={styles.title}>Edit article</h1>
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
            data-cy="edit-title-item"
          />
          {errors.title && touched.title ? (
            <div className={styles.error}>{errors.title}</div>
          ) : null}
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_label} htmlFor="text">Introduction:</label>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            type="text"
            name="introduction"
            placeholder="Enter a introduction of article..."
            error={errors.introduction && touched.introduction}
            onChange={handleChange}
            value={values.introduction}
            rows="5"
            data-cy="edit-introduction-item"
          ></textarea>
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
          <label className={styles.form_label} htmlFor="text">Image:</label>
          <Input
            className={styles.input}
            type="text"
            name="image"
            placeholder="Enter url of image..."
            error={errors.image && touched.image}
            onChange={handleChange}
            value={values.image}
            data-cy="edit-image-item"
          />
          {errors.image && touched.image ? (
            <div className={styles.error}>{errors.image}</div>
          ) : null}
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_label} htmlFor="text">Content:</label>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            type="text"
            name="body"
            placeholder="Enter a content of article..."
            error={errors.body && touched.body}
            onChange={handleChange}
            value={values.body}
            rows="20"
            data-cy="edit-content-item"
          ></textarea>
          {errors.body && touched.body ? (
            <div className={styles.error}>{errors.body}</div>
          ) : null}
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_label}>Categories:</label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            onChange={(elements) => currentCategoryValue(elements)}
            isMulti
            value={defaultCategories}
            options={dataCategories}
          />
          {errors.categories ? (
            <div className={styles.error}>{errors.categories}</div>
          ) : null}
        </div>
        <Button data-cy="edit-item-btn" className={styles.submit} type="submit">Edit</Button>
      </form>
    )}
  </Formik>
);

export default EditItemForm;
