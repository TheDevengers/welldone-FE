import React from 'react'

class ArticleForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            intro: '',
            image: '',
            content: '',
            categories: [
                { id: 0, label: 'Programming', checked: false }, 
                { id: 1, label: 'Teamwork', checked: false }, 
                { id: 2, label: 'Productivity', checked: false }, 
                { id: 3, label: 'Lifestyle', checked: false }
            ],
            errorValidation: false
        }

        this.onChangeCategory = this.onChangeCategory.bind(this)
        this.onChangeField = this.onChangeField.bind(this)
        this.onSendArticle = this.onSendArticle.bind(this)
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
                if(category.label === categorySelected.label){
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

    onSendArticle(articleState){
        this.validateArticle()
        if(this.state.errorValidation){
             //Send post request to publish/save with new article
        }
       
    }

    validateArticle(){
        const { title, intro, image, categories } = this.state
        if(!title.length || !intro.length || !image.length || !this.checkCategoriesSelected().length){
            this.setState({
                errorValidation: true
            })
        }
    }

    checkCategoriesSelected(){
        const categoriesSelected = this.state.categories.filter((category) => {
            return true ? category.checked : false
        })

        return categoriesSelected
    }

    render(){

        const { title, intro, image, categories, errorValidation } = this.state
        const ARTICLE_STATE = [ 'PUBLISH', 'DRAFT' ]

        return (
          <form>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={ title } onChange={ (e) => this.onChangeField(e) } required/>
            <label htmlFor="intro">Intro</label>
            <input type="text" id="intro" name="intro" value={ intro } onChange={ (e) => this.onChangeField(e) } required/>
            <label htmlFor="image">Image</label>
            <input type="url" id="image" name="image" value={ image } onChange={ (e) => this.onChangeField(e) } required/>
            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" onChange={ (e) => this.onChangeField(e) } required/>
            <div>
              {
                categories.map((category) => {
                    return (
                      <span key={ category.id }>
                        <input type="checkbox" 
                        value={ category.label } 
                        checked={ category.checked }
                        onChange={ () => this.onChangeCategory(category) }
                        />
                        <label>{ category.label }</label>
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