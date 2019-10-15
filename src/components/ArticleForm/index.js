import React, { Fragment } from 'react';
import { createArticle, retrieveCategories } from '../../utils/apiArticle.js';
import { Input, Button, ModalBox, Nav } from '../commons';
import styles from './articleForm.module.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ArticleForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            intro: '',
            image: '',
            content: '',
            categories: [],
            error: false
        };
    }

    componentDidMount = async () => {
      try {
        const categories = await retrieveCategories();
        if(categories && categories.length){
          categories.map((category) => {
            this.setState((state) => {
                state.categories.push(Object.assign({}, category, { checked: false }));
                return state;
            });
          });
        }
      } catch(err) {
        this.props.handleError(err, () => {
          toast.error('Unable to load categories', {
            autoClose: false,
            position: toast.POSITION.BOTTOM_CENTER
          });
        });
      }
    }

    onChangeField = (event) => {
        this.setState({
            [ event.target.name ]: event.target.value
        });
    }

    onChangeCategory = (categorySelected)=>{
        this.setState( (state) => {
            const updatedCategories = state.categories.map((category) => {
                if(category.name === categorySelected.name){
                    return Object.assign({}, category, { checked: !category.checked });
                }
                return category;
            });

            return {
                categories: updatedCategories
            };
        });
    }

    onSendArticle = async(e, articleState) => {
      e.preventDefault();
      const result = await createArticle(Object.assign({}, this.state, { state: articleState }));

      if(result.ok) {
        this.props.history.push('/');
      }

      if(result && !result.ok){
        this.setState({ error: true });
      }
    }

    onHandleCloseModal = () => {
      this.setState({ error: false });
    };

    render(){
      const { title, intro, image, categories, error } = this.state;
      const ARTICLE_STATE = [ 'PB', 'DR' ];

      return (
        <Fragment>

          <Nav />
          <div className={styles.article_form_container}>
            <h1 className={styles.title}>Create article</h1>
            {error ? (
              <ModalBox message="There is a problem to create a new article. Try again!" open={error} onClose={this.onHandleCloseModal}></ModalBox>
              ) : null
            }
            <form className={styles.form}>
              <div className={styles.form_group}>
                <label className={styles.form_label} htmlFor="title" >Title</label>
                <Input type="text" id="title" name="title" value={ title } onChange={ (e) => this.onChangeField(e) } required/>
                <label className={styles.form_label} htmlFor="intro">Intro</label>
                <Input type="text" id="intro" name="intro" value={ intro } onChange={ (e) => this.onChangeField(e) } required/>
                <label className={styles.form_label} htmlFor="image">Image</label>
                <Input type="url" id="image" name="image" value={ image } onChange={ (e) => this.onChangeField(e) } />
                <label className={styles.form_label} htmlFor="content">Content</label>
                <textarea className={styles.form_textarea} id="content" name="content" onChange={ (e) => this.onChangeField(e) } rows="20" required/>
                <label className={styles.form_label}>Categories</label>
                <div className={styles.form_choices}>
                  {
                    categories.map((category) => {
                        return (
                          <span key={ category.id } className={styles.form_choice}>
                            <input type="checkbox" 
                            value={ category.name } 
                            checked={ category.checked }
                            onChange={ () => this.onChangeCategory(category) }
                            />
                            <span>{ category.name }</span>
                          </span>
                        );
                    })
                }
                </div>
                <div className={styles.form__buttonGroup}>
                  <Button onClick={ (e)=> this.onSendArticle(e, ARTICLE_STATE[ 0 ]) }>Publish</Button>
                  <Button onClick={ (e)=> this.onSendArticle(e, ARTICLE_STATE[ 1 ]) }> Save As A Draft </Button>
                </div>
              </div>
            </form>
          </div>
        </Fragment>
      );
    }
}

export default ArticleForm;