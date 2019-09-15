import React from 'react'

class ArticleForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            intro: '',
            image: '',
            content: '',
            categories: [],
            errorValidation: false,
            error: false
        }

        this.onChangeCategory = this.onChangeCategory.bind(this)
        this.onChangeField = this.onChangeField.bind(this)
        this.onSendArticle = this.onSendArticle.bind(this)
    }

    componentDidMount(){
        fetch(`${ process.env.REACT_APP_API }/categories`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.map((category) => {
                this.setState((state) => {
                    state.categories.push(Object.assign({}, category, { checked: false }))
                    return state
                })
            })
        })
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

    onSendArticle(articleState){
        this.validateArticle()
        if(!this.state.errorValidation){
            fetch(`${ process.env.REACT_APP_API }/articles`, {
              method: 'POST',
              body: JSON.stringify({
                title: this.state.title,
                introduction: this.state.intro,
                state: articleState,
                body: this.state.content,
                image: this.state.image ? this.state.image : '',
                categories: this.checkCategoriesSelected(),
                user_id: process.env.REACT_APP_USER_ID
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then((response) => {
                return response.json();
              }).catch( (error) => this.setState({ error: true }))
        }
    }

    validateArticle(){
        const { title, intro, image } = this.state
        if(!title.length || !intro.length || !this.checkCategoriesSelected().length){
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