import React from 'react'
import { createArticle, retrieveCategories } from '../../utils/apiArticle.js'

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
        }

        this.onChangeCategory = this.onChangeCategory.bind(this)
        this.onChangeField = this.onChangeField.bind(this)
        this.onSendArticle = this.onSendArticle.bind(this)
    }

    async componentDidMount(){
      let categories = await retrieveCategories()
      if(categories.length){
        categories.map((category) => {
          this.setState((state) => {
              state.categories.push(Object.assign({}, category, { checked: false }))
              return state
          })
        })
      }
    }

    onChangeField(event){
        this.setState({
            errorValidation: false,
            [ event.target.name ]: event.target.value
        })
    }

    onChangeCategory(categorySelected){
        this.setState( (state) => {
            const updatedCategories = state.categories.map((category) => {
                if(category.name === categorySelected.name){
                    return Object.assign({}, category, { checked: !category.checked })
                }
                return category
            })

            return {
                errorValidation: false,
                categories: updatedCategories
            }
        })
    }

    async onSendArticle(articleState){
      const result = await createArticle(Object.assign({}, this.state, { state: articleState }))

      if(!result){
        this.setState({ error: true })
      }
    }

    render(){
        const { title, intro, image, categories } = this.state
        const ARTICLE_STATE = [ 'PB', 'DR' ]

        return (
          <form>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={ title } onChange={ (e) => this.onChangeField(e) } required/>
            <label htmlFor="intro">Intro</label>
            <input type="text" id="intro" name="intro" value={ intro } onChange={ (e) => this.onChangeField(e) } required/>
            <label htmlFor="image">Image</label>
            <input type="url" id="image" name="image" value={ image } onChange={ (e) => this.onChangeField(e) } />
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
                    )
                }) 
            }
            </div>
            <label htmlFor="published">Published</label>
            <span>False</span>
            <input type="button" value="Publish" name="publish" onClick={ ()=> this.onSendArticle(ARTICLE_STATE[ 0 ]) }/>
            <input type="button" value="Save As Draft" name="draft" onClick={ ()=> this.onSendArticle(ARTICLE_STATE[ 1 ]) }/>
          </form>
        )
    }
}

export default ArticleForm