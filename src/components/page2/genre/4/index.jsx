import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyProvider } from "../../../../context";
import { films, serial } from "../../../inf";
import React from "react";

function Genre4() {
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
          <span className="genre-title">Thriller</span>
        ) : (
          <span className="genre-title">Crime</span>
        )}
        {/* movie */}
        <div className="movies">
          <div className="body-movies">
            {context.showMovies(type, "thriller", "crime")}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(Genre4);
