import React, { Component } from 'react';
import styles from './listItems.module.css';
import Item from '../Item/Item.js';
import api from '../../utils/api';

const { getArticles, deleteArticle } = api();

class ListItems extends Component {

  constructor(props) {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    getArticles()
    .then((response) => {
      this.setState({
        articles: response
      });
    });
  }

  deleteArticle = (id) => {
    deleteArticle(id);
    const filteredArticles = this.state.articles ? this.state.articles.filter((movie) => movie.id !== id) : [];
    this.setState({ articles: filteredArticles });
  }

  render() {
    const { articles } = this.state;

    return(
      <div className={styles.items_container}>
        {
          articles && articles.map((item) => {
            return <Item
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