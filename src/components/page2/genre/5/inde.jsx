import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyProvider } from "../../../../context";
import { films, serial } from "../../../inf";
import React from "react";

function Genre5() {
  const [type, setType] = useState();
  const context = useContext(MyProvider);
 
//   مشخص کردن نوع فیلم
  useEffect(() => {
    setType(context.type === "film" ? films : serial);
  }, [context.type]);
 

  return (
    <Link to="/movie">
      <div className="body-main-genre">
          {/* title */}
        {context.type === "film" ? (
          <span className="genre-title">Romance</span>
        ) : (
          <span className="genre-title">Feel Good</span>
        )}

        {/* movies */}
        <div className="movies b">
          <div className="body-movies">
            {context.showMovies(type, "romance", "feel-good")}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(Genre5);
