import React, { Fragment, useState } from 'react';
import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { MdDeleteForever } from 'react-icons/md';

import styles from './userProfileForm.module.css';

import { Button, ButtonDelete, DatePicker, ConfirmDialog } from '../commons';
import '@reach/dialog/styles.css';
import { editUserProfile, deleteUserProfile } from '../../persistence/profile';
import cookieStorage from '../../persistence/cookieStorage';

const { get } = cookieStorage();

const handleDelete = () => deleteUserProfile(get('id'));

const SIZE = '20px';

const UserProfileSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, 'Must be between 4 and 150 characters')
        .max(150, 'Must be between 4 and 150 characters')
        .required('Username is required'),
    email: Yup.string()
        .email('Must be an email')
        .required('Email is required'),

    first_name:Yup.string()
        .min(2, 'Must be between 2 and 30 characters')
        .max(30, 'Must be between 2 and 30 characters'),

    last_name: Yup.string()
        .min(4, 'Must be between 4 and 150 characters')
        .max(150, 'Must be between 4 and 150 characters'),
    birth_date:Yup.string()
        .min(2, 'Must be 10 characters')
        .max(10, 'Must be 10 characters'),
    birth_place: Yup.string()
        .min(4, 'Must be between 4 and 70 characters')
        .max(70, 'Must be between 4 and 70 characters'),
});

const UserProfileForm = ({ dataUserProfile, profileInfo }) => {

  const [ error, setError ] = useState(false);
  const [ dataError, setDataError ] = useState({});

return(
  <Formik
    enableReinitialize={true}
          initialValues={ {
            first_name: dataUserProfile.first_name,
            last_name: dataUserProfile.last_name,
            username: dataUserProfile.username,
            email: dataUserProfile.email,
            profile: {
              description: profileInfo.description || '',
              birth_date: profileInfo.birth_date || '',
              birth_place: profileInfo.birth_place || ''
            },
          } }

          validationSchema={ UserProfileSchema }

          onSubmit = { async (values) => {
            
            if (!values.profile.birth_date.length){
              values.profile.birth_date = `${values.profile.birth_date.getFullYear()}-${values.profile.birth_date.getMonth()+1}-${values.profile.birth_date.getDate()}`;
            }
            if (!values.profile.description){
              values.profile.description = null;
            }
            if (!values.profile.birth_place){
              values.profile.birth_place = null;
            }
            if (!values.profile.birth_date){
              values.profile.birth_date = null;
            }
 
            const response = await editUserProfile(get('id'), values);
            setError(response.error);
            setDataError(response);
            
          }}
        >

    {({ errors, touched, values, setFieldValue, handleBlur }) => (
      <Form noValidate className={styles.form}>
        <div className={styles.form_group}>
          <label htmlFor="first_name">First Name:</label>
          <Field name="first_name" type="text" value={values.first_name}
          className={ 'form-control' + (errors.first_name && touched.first_name ? ' is-invalid' : '') } />
          <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
          {
              error && dataError.first_name ? (
                <div className={styles.error}>{dataError.first_name}</div>
              ) : null
            }
        </div>

        <div className={styles.form_group}>
          <label htmlFor="last_name">Last Name:</label>
          <Field name="last_name" type="text" value={values.last_name} onBlur={handleBlur}
          className={ 'form-control' + (errors.last_name && touched.last_name ? ' is-invalid' : '') } />
          <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
          {
              error && dataError.last_name ? (
                <div className={styles.error}>{dataError.last_name}</div>
              ) : null
            }
        </div>

        <div className={styles.form_group}>
          <label htmlFor="username">Username:</label>
          <Field name="username" type="text" value={values.username} onBlur={handleBlur}
          className={ 'form-control' + (errors.username && touched.username ? ' is-invalid' : '') } />
          <ErrorMessage name="username" component="div" className="invalid-feedback" />
          {
              error && dataError.username ? (
                <div className={styles.error}>{dataError.username}</div>
              ) : null
            }
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email">Email:</label>
          <Field name="email" type="text" value={values.email}
          className={ 'form-control' + (errors.email && touched.email ? ' is-invalid' : '') } />
          <ErrorMessage name="email" component="div" className="invalid-feedback" />
          {
              error && dataError.email ? (
                <div className={styles.error}>{dataError.email}</div>
              ) : null
            }
        </div>

        <div className={styles.form_group}>
          <label htmlFor="profile.description">Description:</label>
          <Field name="profile.description" type="text" value={values.profile.description} onBlur={handleBlur}
          className={ 'form-control' + (errors.description && touched.description ? ' is-invalid' : '') } />
          <ErrorMessage name="profile.description" component="div" className="invalid-feedback" />
            
        </div>

        <div className={styles.form_group}>
          <label htmlFor="profile.birth_place">Birth place:</label>
          <Field name="profile.birth_place" type="text" value={values.profile.birth_place} onBlur={handleBlur}
          className={ 'form-control' + (errors.birth_place && touched.birth_place ? ' is-invalid' : '') } />
          <ErrorMessage name="profile.birth_place" component="div" className="invalid-feedback" />
            
        </div>
   
        <div className={styles.form_group}>
          <label htmlFor="profile.birthdate">Birth Date:</label>           
          <DatePicker name="profile.birth_date" value={ values.profile.birth_date } onChange={ setFieldValue } className={ 'form-control' + (errors.birth_date && touched.birth_date ? ' is-invalid' : '') } />
          <ErrorMessage name="profile.birth_date" component="div" className="invalid-feedback" />
        </div>

        <Button type="submit" className={styles.submit}>Submit</Button>
          
        <ConfirmDialog title="Delete User" description="The user will be permanently deleted, are you sure you want to delete it?">
          {(confirm) => (
            <ButtonDelete className={styles.delete} onClick={confirm(handleDelete)}>
              <MdDeleteForever size={SIZE}/>Delete account
            </ButtonDelete>
                
          )}
        </ConfirmDialog>

      </Form>
          )}
  </Formik>
      
      );};

export default UserProfileForm;