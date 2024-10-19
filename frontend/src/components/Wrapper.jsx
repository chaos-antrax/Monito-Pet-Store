import React from "react";
import { Header, Footer } from "./Index";

const Wrapper = (props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Wrapper;
