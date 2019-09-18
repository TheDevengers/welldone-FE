import React from 'react';
import { createArticle, retrieveCategories } from '../../utils/apiArticle.js';
import { Input, Button } from '../commons';

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

    async onSendArticle(articleState){
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
          <form>
            <label htmlFor="title">Title</label>
            <Input type="text" id="title" name="title" value={ title } onChange={ (e) => this.onChangeField(e) } required/>
            <label htmlFor="intro">Intro</label>
            <Input type="text" id="intro" name="intro" value={ intro } onChange={ (e) => this.onChangeField(e) } required/>
            <label htmlFor="image">Image</label>
            <Input type="url" id="image" name="image" value={ image } onChange={ (e) => this.onChangeField(e) } />
            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" onChange={ (e) => this.onChangeField(e) } required/>
            <div>
              {
                categories.map((category) => {
                    return (
                      <span key={ category.id }>
                        <input type="checkbox" 
                        value={ category.name } 
                        checked={ category.checked }
                        onChange={ () => this.onChangeCategory(category) }
                        />
                        <label>{ category.name }</label>
                      </span>
                    );
                }) 
            }
            </div>
            <Button onClick={ ()=> this.onSendArticle(ARTICLE_STATE[ 0 ]) }>Publish</Button>
            <Button onClick={ ()=> this.onSendArticle(ARTICLE_STATE[ 1 ]) }> Save as a draft </Button>
          </form>
        );
    }
}

export default ArticleForm;