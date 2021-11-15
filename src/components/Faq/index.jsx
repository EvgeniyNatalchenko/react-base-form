import React, { Component } from "react";
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

export class Faq extends Component {
  state = {
    articles: defaultState,
  };

  addArticle = ({ title, about }) => {
    if (title && about) {
      this.setState({articles: [...this.state.articles, {title, about}]})
    }
  }

  render() {
    return (
      <div>
        {this.state.articles.map((article) => (
          <ItemArticle id={article.id} article={article} />
        ))}
        <Form addArticle={this.addArticle} />
      </div>
    );
  }
}

export default Faq;
