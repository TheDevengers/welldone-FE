import React from 'react';
import { Link } from 'react-router-dom';
import styles from './item.module.css';
import { MdDelete, MdModeEdit } from 'react-icons/md';

const SIZE = '25px';

const Item = ({ data, ...props }) => {
  return(
    <div className={styles.item_container}>
      <picture>
        <img src={data.image} alt="article" className={styles.image_item} />
      </picture>
      <div className={styles.resume}>
        <div className={styles.content_container}>
          <div className={styles.nav_content}>
            <h1 className={styles.content_title}>{data.title}</h1>
            <div className={styles.icons}>
              <MdDelete size={SIZE} onClick={() => props.deleteArticle(data.id)}/>
              <Link className={styles.link} to={`/edit-article/${data.id}`}>
                <MdModeEdit size={SIZE} />
              </Link>
            </div>
          </div>
          <p className={styles.item_description}>{data.introduction}</p>
          <em>{new Date(data.publication_date).toLocaleDateString()}</em>
        </div>
        <div className={styles.btn_container}>
          {data.categories.map((elem) =>
            <div key={elem.id}>
              <button className={styles.button}>
                {elem.name}
              </button>
            </div>)}
        </div>
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