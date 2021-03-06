import React from 'react';
import { Link } from 'react-router-dom';
import styles from './item.module.css';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';

const SIZE = '25px';

const Item = ({ data, ...props }) => {
  return(
    <div data-cy="list-items" className={styles.item_container}>
      <picture>
        <img src={data.image} alt="article" className={styles.image_item} />
      </picture>
      <div className={styles.resume}>
        <div className={styles.content_container}>
          <div className={styles.nav_content}>
            <h1 data-cy={`article-${data.id}-title`} className={styles.content_title}>{data.title}</h1>
            <div className={styles.icons}>
              {
                props.tabType === 'articles' ? (
                  <>
                    <MdDelete data-cy={`delete-article-${data.id}`} size={SIZE} onClick={() => props.deleteArticle(data.id)} />
                    <Link className={styles.link} to={`/edit-article/${data.id}`}>
                      <MdModeEdit data-cy={`edit-article-${data.id}`} size={SIZE} />
                    </Link>
                  </>
                )
                  : <FaHeart size={SIZE}></FaHeart>}
            </div>
          </div>
          <p className={styles.item_description}>{data.introduction}</p>
          <em>{new Date(data.publication_date).toLocaleDateString()}</em>
        </div>
        <div data-cy="btn-container" className={styles.btn_container}>
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