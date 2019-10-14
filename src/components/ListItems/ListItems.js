import React, { Component } from 'react';
import styles from './listItems.module.css';
import Item from '../Item/Item.js';
import ItemNotFound from '../ItemNotFound/ItemNotFound.js';
import api from '../../utils/api';
import { Spinner } from '../commons/index';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { getArticles, deleteArticle, getFavorites } = api();

class ListItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { tab } = this.props;
    if(tab === 'articles') {
      getArticles()
      .then((response) => this.setState({ articles: response }))
      .catch((err) => {
        this.props.handleError(err, () => {
          toast.error('Unable to load articles', {
            autoClose: false,
            position: toast.POSITION.BOTTOM_CENTER
          });
        });
      })
      .finally(() => this.setState({ loading: false }));
    } else if (tab === 'favorites')  {
      getFavorites()
        .then((response) => this.setState({ articles: response }))
        .catch((err) => {
          this.props.handleError(err, () => {
            toast.error('Unable to load favorites articles', {
              autoClose: false,
              position: toast.POSITION.BOTTOM_CENTER
            });
          });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  deleteArticle = (id) => {
    deleteArticle(id);
    const filteredArticles = this.state.articles ? this.state.articles.filter((article) => article.id !== id) : [];
    this.setState({ articles: filteredArticles });
    toast.success('Article deleted', {
      autoClose: 1000,
      position: toast.POSITION.BOTTOM_CENTER
    });

  }

  render() {
    const { articles, loading } = this.state;
    const { tab } = this.props;

    if(loading) {
      return <Spinner />;
    }

    if (articles && articles.length) {
      return (
        <div className={styles.items_container}>
          {
            articles.map((item) =>
              <Item
                tabType={tab}
                key={item.id}
                data={item}
                deleteArticle={this.deleteArticle}
              />)
          }
        </div>
      );
    }
    return ( <ItemNotFound /> );
  }
}

export default ListItems;