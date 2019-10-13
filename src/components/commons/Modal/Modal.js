import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import styles from './modal.module.css';
import { MdError } from 'react-icons/md';

const SIZE = '25px';

const ModalBox = ({ open, onClose, message }) => (
  <Dialog onClose={onClose} open={open} className={styles.modal}>
    <div className={styles.modal_description}>
      <MdError size={SIZE}/>
      <p className={styles.message}>{message}</p>
    </div>
  </Dialog>
);

export default ModalBox;