import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, getIn  } from 'formik';
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

    profile: Yup.object().shape({
      description: Yup.string()
          .max(150, 'Maximum of 150 characters'),
      birth_place: Yup.string()
          .max(70, 'Maximum of 70 characters'),
      image_user: Yup.string()
          .max(300, 'Maximum of 300 characters'),
    })
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
              description: profileInfo  ?  profileInfo.description : '',
              birth_date:  profileInfo ? profileInfo.birth_date : '',
              birth_place: profileInfo ? profileInfo.birth_place : '',
              image_user: profileInfo ? profileInfo.image_user : ''
            },
          } }

          validationSchema={ UserProfileSchema }

          onSubmit = { async (values) => {
            
            if (!values.profile.description){
              values.profile.description = null;
            }

            if (!values.profile.birth_place){
              values.profile.birth_place = null;
            }

            if (!values.profile.birth_date){
              values.profile.birth_date = null;
            }else if (!values.profile.birth_date.length) {
              values.profile.birth_date = `${values.profile.birth_date.getFullYear()}-${values.profile.birth_date.getMonth()+1}-${values.profile.birth_date.getDate()}`;
            }

            if (!values.profile.image_user){
              values.profile.image_user = null;
            }
 
            const response = await editUserProfile(get('id'), values);
            if (response && response.error) {
              setError(response.error);
              setDataError(response);
            } else {
              window.location.href = '/';
            }

          }}
        >

    {({ errors, touched, values, setFieldValue, handleBlur }) => (
      <Form noValidate className={styles.form}>
        <h1 className={styles.title}>User details</h1>
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
          <label htmlFor="profile.image_user">Profile Picture:</label> 
          <Field name="profile.image_user" type="text" value={values.profile.image_user} onBlur={handleBlur}
          className={ 'form-control' + (getIn(errors, 'profile.image_user') && getIn(touched, 'profile.image_user') ? ' is-invalid' : '') } />
          <ErrorMessage name="profile.image_user" component="div"  className="invalid-feedback" />            
        </div>

        <div className={styles.form_group}>
          <label htmlFor="profile.description">Description:</label>
          <Field name="profile.description" type="text" value={values.profile.description} onBlur={handleBlur}
          className={ 'form-control' + (getIn(errors, 'profile.description') && getIn(touched, 'profile.description') ? ' is-invalid' : '') } />
          <ErrorMessage name="profile.description" component="div" className="invalid-feedback" />            
        </div>

        <div className={styles.form_group}>
          <label htmlFor="profile.birth_place">Birth place:</label>
          <Field name="profile.birth_place" type="text" value={values.profile.birth_place} onBlur={handleBlur}
          className={ 'form-control' + (getIn(errors, 'profile.birth_place') && getIn(touched, 'profile.birth_place') ? ' is-invalid' : '') } />
          <ErrorMessage name="profile.birth_place" component="div" className="invalid-feedback" />            
        </div>
   
        <div className={styles.form_group}>
          <label htmlFor="profile.birthdate">Birth Date:</label>           
          <DatePicker name="profile.birth_date" value={ values.profile.birth_date } onChange={ setFieldValue } 
          className={ 'form-control' + (getIn(errors, 'profile.birth_date') && getIn(touched, 'profile.birth_date') ? ' is-invalid' : '') } />
          <ErrorMessage name="profile.birth_date" component="div" className="invalid-feedback" />
        </div>

        <Button type="submit" className={styles.submit}>Edit</Button>
          
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