const checkCategoriesSelected = (categories) => {
    const categoriesSelected = categories.filter((category) => {
        return true ? category.checked : false
    })
    return categoriesSelected
}

const validateArticle = ({ title, intro, content, categories } ) => {
    let isValid = false

    if(title.length && intro.length && content.length && checkCategoriesSelected(categories).length){
        isValid = true
    }
    return isValid
}

const createArticle = async (article) => {
    let success = false

    if(validateArticle(article)){
        await fetch(`${ process.env.REACT_APP_API }/articles`, 
        {
            method: 'POST',
            body: JSON.stringify({
                title: article.title,
                introduction: article.intro,
                state: article.state,
                body: article.content,
                image: article.image ? article.image : '',
                categories: checkCategoriesSelected(article.categories),
                user_id: process.env.REACT_APP_USER_ID
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            success = true
        })
    }
    return success
}

const retrieveCategories = async () => {

    let categories = []

    await fetch(`${ process.env.REACT_APP_API }/categories`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            categories = categories.concat(data)
        })
    
    return categories
}

export {
    createArticle,
    retrieveCategories
}