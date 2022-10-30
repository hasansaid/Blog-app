import React from "react";
import "./styles.css";
import Navbar from "./Navbar/Navbar";
import Navigation from "./Navigation/index";
import Category from "../courses/Category/Category"
import Article from "../courses/Article/Article";
const index = () => {
  return (
    <div>
      <Navigation />
      <Navbar />
     
      <Category />
      <Article/>
     
    </div>
  );
};

export default index;
