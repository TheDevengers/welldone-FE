import React, { Component, Fragment } from 'react';
import Nav from '../commons/Nav/Nav.js';
import EditItemForm from './EditItemForm.js';
import api from '../../utils/api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { getArticle, getCategories } = api();

class EditItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      articleDetail: {},
      categories: [],
      defaultCategories: []
    };
  }

  componentDidMount() {
    getCategories()
    .then((categories) => this.setState({ categories: this._formatCategories(categories) }))
    .catch((err) => {
      this.props.handleError(err, () => {
        toast.error('Unable to load categories', {
          autoClose: false,
          position: toast.POSITION.BOTTOM_CENTER
        });
      });
    });

    getArticle(this.state.id)
    .then((article) => this.setState({ articleDetail: article, defaultCategories: this._formatCategories(article.categories) }))
    .catch((err) => {
      this.props.handleError(err, () => {
        toast.error('Unable to load articles', {
          autoClose: false,
          position: toast.POSITION.BOTTOM_CENTER
        });
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  _formatCategories(arr) {
    if (arr) {
      return arr.map((data) => Object.assign({
        id: data.id,
        value: data.id,
        label: data.name
      })) || [];
    }
  }

  currentCategoryValue = (elements) => {
    if(!elements) {
      return this.setState({ defaultCategories: [] });
    }
      return this.setState({ defaultCategories: elements });
  }

  render() {
    const { articleDetail, categories, defaultCategories } = this.state;

    return(
      <Fragment>
        <Nav />
        <EditItemForm
          dataArticle={articleDetail}
          dataCategories={categories}
          defaultCategories={defaultCategories}
          currentCategoryValue={this.currentCategoryValue}
        />
      </Fragment>
    );
  }
}

export default EditItem;
