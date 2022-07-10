import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page1 from "./components/page1";
import Page2Com from "./components/page2";
import { MyProvider } from "./context";

function Rotuescom() {

  const { userInf } = useContext(MyProvider)

  const Provider = ({ children }) => {
    return userInf !== null  ? (children) : <Navigate to="/" />;
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
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(Rotuescom);
