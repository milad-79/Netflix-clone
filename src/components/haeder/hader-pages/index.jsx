import React, { useContext } from "react";
import "./styles.css";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { MyProvider } from "../../../context";

// header  page
function HeaderPages() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const { setInfUserFunc } = useContext(MyProvider)

  const handelLoginWithGoogleAccount = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const user = result.user;
        setInfUserFunc(user)
        navigate("/lists");
      })
      .catch((error) => {
        console.log(error)
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userNetfilx");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {userInf} = useContext(MyProvider)

  return (
    <header className="header">
      <div className="left">
        <img src="./images/icons/logo.png" alt="" className="Netflix" />
      </div>

      <div className="right">
        {userInf ? (
          <div className="profile_img" onClick={handleSingOut}>
            <img src="./images/users/1.png" alt="user" />
          </div>
        ) : (
          <button
            className="sing_ing_btn"
            onClick={handelLoginWithGoogleAccount}
          >
            Sing In
          </button>
        )}
      </div>
    </header>
  );
}

export default React.memo(HeaderPages);
