import React from 'react';
import styles from './itemNotFound.module.css';
import notFoundIcon from '../../assets/not-found.png';

const ItemNotFound = () => {
  return(
    <div className={styles.item_container}>
      <picture>
        <img src={notFoundIcon} alt="Not Found" className={styles.image_item} />
      </picture>
      <div className={styles.text_item}>
        No articles yet...
      </div>
    </div>
  );
};

export default ItemNotFound;