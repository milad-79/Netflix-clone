import "./styles.css";
import React from "react";
import { useContext } from "react";
import { MyProvider } from "../../../context";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function HeaderMoviePage() {
  const context = useContext(MyProvider);
  const navigate = useNavigate();
  
  
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userNetfilx");
        navigate("/");
      })
      .catch((error) => {
        console.log('error')
      });
  };

  return (
    <header className="header">
      <div className="left">
        <div className="logo">
          <img src="./images/icons/logo.png" alt="" className="logo-d" />
          <img src="./images/icons/logo-n.png" alt="" className="logo-m" />
        </div>
        <div className="header-links">
          <span onClick={() => context.typeHandel("film")}>Films</span>
          <span onClick={() => context.typeHandel("serial")}>Serials</span>
        </div>
      </div>
      <div className="right">
        <div className="profile" onClick={handleSingOut}>
          <img src="./images/users/1.png" alt="user" />
        </div>
      </div>
    </header>
  );
}

export default React.memo(HeaderMoviePage);
