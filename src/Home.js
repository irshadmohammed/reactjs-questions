import React from "react";
import './Home.css'
import Questions from "./Questions";

class Home extends React.Component {
  render() {
    return (
      <>
        <h2 className="home__heading">React JS Questions</h2>
        <div className="home__container">
          <Questions />
        </div>
      </>
    )
  }
}

export default Home;
