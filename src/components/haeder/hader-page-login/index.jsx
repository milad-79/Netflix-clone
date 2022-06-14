import React from "react";
import "./styles.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

// header loging  page
function HeaderLogPage() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();


  const handelLoginWithGoogleAccount = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const user = result.user;
        localStorage.setItem("userNetfilx", JSON.stringify(user));
        navigate("/lists");
      })
      .catch((error) => {
        alert('hi')
      });
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="./images/icons/logo.png" alt="" className="log-log" />
      </div>

      <div className="sing-in-btn-body">
        <button className="sing-ing-btn" onClick={handelLoginWithGoogleAccount}>Sing In</button>
      </div>
    </header>
  );
}

export default React.memo(HeaderLogPage);
