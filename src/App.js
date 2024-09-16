import React from "react";
import webpackLogo from "./static/img/webpack-logo.png";

const App = () => {
  return (
    <>
      <h1> React + Webpack </h1>
      <div class="container">
        <img src={webpackLogo}></img>
      </div>
    </>
  );
};

export default App;
