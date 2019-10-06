import React, { Component, Fragment } from 'react';
import Nav from '../commons/Nav/Nav.js';
import EditItemForm from './EditItemForm.js';
import api from '../../utils/api';

const { getArticle, getCategories } = api();

class EditItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      articleDetail: {},
      categories: []
    };
  }

  componentDidMount() {
    getCategories()
    .then((categories) => this.setState({ categories: categories }));
    getArticle(this.state.id)
    .then((article) => this.setState({ articleDetail: article }));
  }

  render() {
    const { articleDetail, categories } = this.state;
    return(
      <Fragment>
        <Nav />
        <EditItemForm
          dataArticle={articleDetail}
          dataCategories={categories}
        />
      </Fragment>
    );
  }
}

export default EditItem;
