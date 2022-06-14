import "./styles.css";
import React from "react";
import Genre1 from "../genre/1";
import Genre2 from "../genre/2";
import Genre3 from "../genre/3";
import Genre4 from "../genre/4";
import Genre5 from "../genre/5/inde";
import Footer from "../../footer";

function Movies() {
  return (
    <React.Fragment>
      <Genre1 />
      <Genre2 />
      <Genre3/>
      <Genre4/>
      <Genre5/>
      <Footer/>
    </React.Fragment>
  );
}

export default React.memo(Movies);
