import React from 'react';
import { createArticle, retrieveCategories } from '../../utils/apiArticle.js';
import { Input, Button } from '../commons';
import styles from './articleForm.module.css';

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

        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        this.onSendArticle = this.onSendArticle.bind(this);
    }

    async componentDidMount(){
      const categories = await retrieveCategories();
      if(categories.length){
        categories.map((category) => {
          this.setState((state) => {
              state.categories.push(Object.assign({}, category, { checked: false }));
              return state;
          });
        });
      }
    }

    onChangeField(event){
        this.setState({
            [ event.target.name ]: event.target.value
        });
    }

    onChangeCategory(categorySelected){
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

    async onSendArticle(e, articleState){
      e.preventDefault();
      const result = await createArticle(Object.assign({}, this.state, { state: articleState }));

      if(!result){
        this.setState({ error: true });
      }
    }

    render(){
        const { title, intro, image, categories } = this.state;
        const ARTICLE_STATE = [ 'PB', 'DR' ];

        return (
          // TODO Show error modal or message
          <div className={styles.article_form_container}>
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
        );
    }
}

export default ArticleForm;