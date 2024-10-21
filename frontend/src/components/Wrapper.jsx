import React from "react";
import { Navbar, Footer } from "./Index";

const Wrapper = (props) => {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Wrapper;
