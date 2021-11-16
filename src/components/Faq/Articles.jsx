import React, { useContext } from 'react'
import ItemArticle from './ItemArticle'

import {ArticleContext} from './index'

export default function Articles() {
    const [articles] = useContext(ArticleContext)

    return  articles.map((article) => (
            <ItemArticle id={article.id} article={article} />
          ))
}
