import React, { useState, useContext } from "react";
import Articles from "./Articles";
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

export const ArticleContext = React.createContext()

function Faq() {

  const [articles, setArticles] = useState(defaultState)

    return (
      <ArticleContext.Provider value={[articles, setArticles]}>
      <div>
        <Articles />
        <Form />
      </div>
      </ArticleContext.Provider>

    );
}

export default Faq;
