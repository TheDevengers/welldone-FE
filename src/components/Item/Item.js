import React from 'react';
import { Link } from 'react-router-dom';
import styles from './item.module.css';

const Item = ({ data, ...props }) => {
  return(
    <div className={styles.item_container}>
      <picture>
        <img src={data.image} alt="article" className={styles.image_item} />
      </picture>
      <div className={styles.content_container}>
        <div className={styles.nav_content}>
          <h1 className={styles.content_title}>{data.title}</h1>
          <div className={styles.icons}>
            <i className="fas fa-trash delete" onClick={() => props.deleteArticle(data.id)}></i>
            <Link to='/edit-article'>
              <i className="fas fa-edit edit"></i>
            </Link>
          </div>
        </div>
        <p className={styles.item_description}>{data.introduction}</p>
        <em>{data.publication_date}</em>
      </div>
    </div>
  );
};

Item.defaultProps = {
  deleteArticle: () => 0,
  data: [],
  image: '',
  title: '',
  introduction: '',
  publication_date: ''

};

export default Item;