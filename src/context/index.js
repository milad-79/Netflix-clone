import React, { createContext } from "react";

const MyProvider = createContext();

class MyContext extends React.PureComponent {
  state = {
    type: "film",
  };

  // برای تغییر نوع فیلم
  handeleChangeType = (type) => {
    this.setState({
      type: type,
    });
  };

  // تابعی که هر ژانر از فیلم ها رو فیلتر میکنه
  showMovies = (type, genre1, genre2) =>
    type &&
    type
      .filter((item) => item.genre === genre1 || item.genre === genre2)
      .map((movie) => {
        return (
          <div
            key={movie.id}
            className="genre-body"
            onClick={() => this.handleSetMovie(movie)}
          >
            <img src={movie.img} alt={movie.title} />
          </div>
        );
      });

  //برای ذخیره اطلاعات فیلم مورد نظر به در لوکال استرنج
  handleSetMovie = (movie) => {
    localStorage.setItem("movie", JSON.stringify(movie));
  };


  render() {
// قبل از لود صفحه localStorng را خالی میکنه
    window.onbeforeunload = () =>{
      window.localStorage.clear()
    }

    return (
      <MyProvider.Provider
        value={{
          type: this.state.type,
          typeHandel: this.handeleChangeType,
          showMovies: this.showMovies,
          handleMovie: this.handleSetMovie,
        }}
      >
        {this.props.children}
      </MyProvider.Provider>
    );
  }
}

export { MyContext, MyProvider };
