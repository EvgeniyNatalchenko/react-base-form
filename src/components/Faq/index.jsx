import React, { useState } from "react";
import ItemArticle from "./ItemArticle";
import Form from "./Form";
 
const defaultState = [
    {
      id: 1,
      title: "First article title",
      about: "First article about",
    },
    {
      id: 2,
      title: "Second article title",
      about: "Second article about",
    },
]

function Faq() {

  const [articles, setArticles] = useState(defaultState)

  const addArticle = ({ title, about }) => {
    if (title && about) {
      setArticles((prev) => {  return [...prev, {title, about} ] } )
    }
  }

    return (
      <div>
        {articles.map((article) => (
          <ItemArticle id={article.id} article={article} />
        ))}
        <Form addArticle={addArticle}/>
      </div>
    );
}

export default Faq;
