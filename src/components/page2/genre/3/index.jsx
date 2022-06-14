import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyProvider } from "../../../../context";
import { films, serial } from "../../../inf";
import React from "react";

function Genre3() {
  const [type, setType] = useState();
  const context = useContext(MyProvider);
  
  useEffect(() => {
    setType(context.type === "film" ? films : serial);
  }, [context.type]);
  

  return (
    <Link to="/movie">
      <div className="body-main-genre">
          {/* title */}
        {context.type === "film" ? (
          <span className="genre-title">Children</span>
        ) : (
          <span className="genre-title">Children</span>
        )}
        {/* movies */}
        <div className="movies">
          <div className="body-movies">
            {context.showMovies(type, "children", "children")}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(Genre3);
