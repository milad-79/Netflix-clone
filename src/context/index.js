import React, { createContext } from "react";

const MyProvider = createContext();

class MyContext extends React.PureComponent {
  state = {
    userInf: null,
  };

  setInfUserHandler = (inf) => {
    this.setState({
      userInf: inf
    })
  };


  render() {

    return (
      <MyProvider.Provider
        value={{
          userInf: this.state.userInf,
          setInfUserFunc: this.setInfUserHandler,
        }}
      >
        {this.props.children}
      </MyProvider.Provider>
    );
  }
}

export { MyContext, MyProvider };
