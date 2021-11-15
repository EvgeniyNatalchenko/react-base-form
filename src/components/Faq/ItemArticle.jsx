import React, { Component } from "react";

export class ItemArticle extends Component {
  state = {
    isShowAbout: false,
  };

  handleTitleClick = () => {
    this.setState({ isShowAbout: !this.state.isShowAbout });
  };

  render() {
    const { article } = this.props;
    const { isShowAbout } = this.state;

    return (
      <div>
        <h2 onClick={this.handleTitleClick}>{article.title}</h2>
        {isShowAbout && <p>{article.about}</p>}
      </div>
    );
  }
}

export default ItemArticle;
