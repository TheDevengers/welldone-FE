import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import styles from './modal.module.css';

const ModalBox = ({ open, onClose, message }) => (
  <Dialog onClose={onClose} open={open} className={styles.modal}>
    <p className={styles.modal_description}>{message}</p>
  </Dialog>
);

export default ModalBox;