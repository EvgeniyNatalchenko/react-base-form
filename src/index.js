import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import "./assets/styles/index.scss";
import Faq from "./components/Faq";

ReactDOM.render(
  <StrictMode>
    <Layout>
      <div className="container">
        <Faq />
      </div>
    </Layout>
  </StrictMode>,
  document.getElementById("root")
);
