import React, { Component } from 'react';
import styles from './listItems.module.css';
import Item from '../Item/Item.js';
import api from '../../utils/api';

const { getArticles, deleteArticle, getFavorites } = api();

class ListItems extends Component {

  constructor(props) {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    const { tab } = this.props;
    if(tab === 'articles') {
      getArticles()
        .then((response) => {
          this.setState({
            articles: response
          });
        });
    } else if (tab === 'favorites')  {
      getFavorites()
        .then((response) => {
          this.setState({
            articles: response
          });
        });
    }
  }

  deleteArticle = (id) => {
    deleteArticle(id);
    const filteredArticles = this.state.articles ? this.state.articles.filter((article) => article.id !== id) : [];
    this.setState({ articles: filteredArticles });
  }

  render() {
    const { articles } = this.state;
    const { tab } = this.props;

    return(
      <div className={styles.items_container}>
        {
          articles && articles.length && articles.map((item) => {
            return <Item
              tabType={tab}
              key={item.id}
              data={item}
              deleteArticle={this.deleteArticle}
            />;
          })
        }
      </div>
    );
  }
}

export default ListItems;