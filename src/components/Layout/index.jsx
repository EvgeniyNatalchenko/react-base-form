import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./style.scss";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </>
    );
  }
}

export default Layout;
