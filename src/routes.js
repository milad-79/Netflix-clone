import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page1 from "./components/page1";
import Page2Com from "./components/page2";
import MovieInformationCom from "./components/page2/movie-inf";

function Rotuescom() {

// شرط لاگین برای ورود
  const Provider = ({ children }) => {
    return localStorage.getItem("userNetfilx") !== null  ? (children) : <Navigate to="/" />;
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route
          path="/lists"
          element={
            <Provider>
              <Page2Com />
            </Provider>
          }
        />
        <Route
          path="/movie"
          element={
            <Provider>
              <MovieInformationCom />
            </Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(Rotuescom);
