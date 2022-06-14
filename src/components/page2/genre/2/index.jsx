import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyProvider } from "../../../../context";
import { films, serial } from "../../../inf";
import React from "react";


function Genre2() {
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
          <span className="genre-title">Suspense</span>
        ) : (
          <span className="genre-title">Comedies</span>
        )}

        {/* movies */}
        <div className="movies b genre2">
          <div className="body-movies">
            {context.showMovies(type, "suspense", "comedies")}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(Genre2);
